import { useEffect, useRef, useState } from "react";

// 3D Extruded Cyber-Arrow Pointer (Points Up-Left with active tip at 0,0)
const CyberArrow = ({ isHovered, isClicked }: { isHovered: boolean; isClicked: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`will-change-transform transition-all duration-300 ease-out origin-top-left ${
      isClicked
        ? "scale-75 -rotate-6 filter drop-shadow-[0_2px_4px_rgba(255,107,74,0.3)]"
        : isHovered
        ? "scale-110 rotate-3 filter drop-shadow-[0_4px_12px_rgba(255,107,74,0.5)]"
        : "scale-100 rotate-0 filter drop-shadow-[0_3px_8px_rgba(255,107,74,0.4)]"
    }`}
  >
    <defs>
      <linearGradient id="cyberArrowGrad" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(11 100% 70%)" />
        <stop offset="100%" stopColor="hsl(11 100% 55%)" />
      </linearGradient>
    </defs>
    {/* Bottom-right face (Darker extrusion) */}
    <path d="M 18 8 L 10 10 L 12 12 L 20 10 Z" fill="hsl(11 90% 40%)" />
    {/* Bottom-left face (Medium extrusion) */}
    <path d="M 10 10 L 8 18 L 10 20 L 12 12 Z" fill="hsl(11 95% 48%)" />
    {/* Top face (Bright orange gradient with sharp white border) */}
    <path
      d="M 0 0 L 18 8 L 10 10 L 8 18 Z"
      fill="url(#cyberArrowGrad)"
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

// Faint trailing wireframe 3D arrow
const TrailArrow = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-45 filter drop-shadow-[0_2px_6px_rgba(255,107,74,0.2)]"
  >
    {/* Outlines of the 3D shape */}
    <path
      d="M 0 0 L 18 8 L 10 10 L 8 18 Z"
      stroke="hsl(11 100% 66%)"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M 18 8 L 20 10 L 12 12 L 10 10 Z"
      stroke="hsl(11 100% 66% / 0.5)"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M 10 10 L 12 12 L 10 20 L 8 18 Z"
      stroke="hsl(11 100% 66% / 0.5)"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

// High-tech target HUD circle that replaces the trail on hover (centered at 0,0)
const HudRing = ({ isClicked }: { isClicked: boolean }) => (
  <svg
    width="60"
    height="60"
    viewBox="-30 -30 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin transition-transform duration-300 ease-out ${
      isClicked ? "scale-75" : "scale-100"
    }`}
    style={{ animationDuration: "8s" }}
  >
    {/* Dashed outer ring */}
    <circle
      cx="0"
      cy="0"
      r="20"
      stroke="hsl(11 100% 66% / 0.85)"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    {/* Inner solid ring */}
    <circle
      cx="0"
      cy="0"
      r="15"
      stroke="hsl(11 100% 66% / 0.25)"
      strokeWidth="1.5"
    />
    {/* Corner HUD tick marks */}
    <path d="M -24 0 L -20 0" stroke="hsl(11 100% 66%)" strokeWidth="1.5" />
    <path d="M 20 0 L 24 0" stroke="hsl(11 100% 66%)" strokeWidth="1.5" />
    <path d="M 0 -24 L 0 -20" stroke="hsl(11 100% 66%)" strokeWidth="1.5" />
    <path d="M 0 20 L 0 24" stroke="hsl(11 100% 66%)" strokeWidth="1.5" />
  </svg>
);

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const coords = useRef({ x: 0, y: 0 });
  const lagCoords = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const hasMoved = useRef(false);

  useEffect(() => {
    // 1. Detect touch device
    const checkTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (checkTouchDevice()) {
      setIsTouch(true);
      return;
    }

    // 2. Mouse move listener
    const onMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        setIsVisible(true);
        // Add active cursor class to hide system cursor
        document.documentElement.classList.add("custom-cursor-active");
      }
    };

    // 3. Hover state listener
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or any parent is clickable/interactive
      const isInteractive = target.closest(
        "a, button, input:not([type='hidden']), select, textarea, [role='button'], .hover-shake, .cursor-pointer, [data-interactive]"
      );

      setIsHovered(!!isInteractive);
    };

    // 4. Mouse click listeners
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    // 5. Visibility listeners
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Attach listeners
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 6. Animation loop using requestAnimationFrame
    const updateCursor = () => {
      const speed = 0.16; // Lerp factor for smooth lag

      // Interpolate trail coordinates
      lagCoords.current.x += (coords.current.x - lagCoords.current.x) * speed;
      lagCoords.current.y += (coords.current.y - lagCoords.current.y) * speed;

      // Update positions directly via transforms for ultimate performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${coords.current.x}px, ${coords.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${lagCoords.current.x}px, ${lagCoords.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Return null on touch devices or if not initialized/visible
  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible && hasMoved.current ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Trailing Element (Lagging position) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform flex items-center justify-center"
        style={{
          width: "1px",
          height: "1px",
        }}
      >
        {/* Wireframe trail arrow (visible when not hovering) */}
        <div
          className={`absolute top-0 left-0 origin-top-left transition-all duration-300 ease-out ${
            isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <TrailArrow />
        </div>

        {/* HUD circle reticle (visible when hovering) */}
        <div
          className={`absolute transition-all duration-300 ease-out ${
            isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <HudRing isClicked={isClicked} />
        </div>
      </div>

      {/* 2. Main Cursor (Real-time position) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{
          width: "1px",
          height: "1px",
        }}
      >
        <div className="absolute top-0 left-0">
          <CyberArrow isHovered={isHovered} isClicked={isClicked} />
        </div>
      </div>
    </div>
  );
}
