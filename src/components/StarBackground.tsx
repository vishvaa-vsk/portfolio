import { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/contexts/theme-provider";
import { useIsMobile } from "@/hooks/use-mobile";
interface StarsLayerProps {
  count: number;
  radius: number;
  color: string;
  size: number;
}

function StarsLayer({ count, radius, color, size }: StarsLayerProps) {
  const ref = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  // Manually generate star positions in a 3D sphere to avoid maath bugs
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count, radius]);

  // Rotation animation and mouse reaction (60fps)
  useFrame((_, delta) => {
    if (ref.current) {
      // Continuous and smooth rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Subtle reactivity to mouse movement
      ref.current.rotation.x += pointer.x * 0.001;
      ref.current.rotation.y += pointer.y * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}


export default function StarBackground() {
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  if (isMobile) return null;

  // Check if it is light mode (directly or via system preference)
  const isLightMode = 
    theme === "light" || 
    (theme === "system" && !window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Dynamic colors depending on the theme
  const starColor = isLightMode ? "#ff7151" : "#fafafa"; // Lighter red-orange in light mode, white in dark mode
  const neonColor = isLightMode ? "#d84315" : "#ff7151"; // Soft deep orange in light mode, neon red-orange in dark mode

  return (
    <div className="pointer-events-none fixed inset-0 z-0 w-full h-full" aria-hidden="true" role="presentation">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false, // Disabled for performance optimization since these are just points
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]} // Support for Retina displays (Mac/iPhones)
      >
        <Suspense fallback={null}>
          {/* Layer 1: Dense field of tiny stars */}
          <StarsLayer count={4000} radius={1.5} color={starColor} size={0.002} />
          {/* Layer 2: Highlight stars, slightly larger for depth effect */}
          <StarsLayer count={800} radius={1.5} color={neonColor} size={0.003} />
        </Suspense>
      </Canvas>
    </div>
  );
}
