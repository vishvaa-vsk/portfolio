import { memo } from "react";

const GridBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      {/* Ambient glowing mesh gradients */}
      <div className="absolute top-[5%] left-[32%] -translate-x-1/2 w-[60vw] max-w-[850px] h-[500px] bg-[var(--accent-primary)]/[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[48%] left-[5%] -translate-x-1/2 w-[45vw] max-w-[600px] h-[450px] bg-[var(--accent-teal)]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      {/* Geometric Dot Grid Canvas Pattern */}
      <div
        className="absolute inset-0 opacity-[0.20] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          color: "rgba(146, 158, 172, 0.4)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle Linear Grid Accent Lines */}
      <div
        className="absolute inset-0 opacity-[0.10] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "112px 112px",
          maskImage:
            "radial-gradient(circle at 50% 35%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 35%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
};

export default memo(GridBackground);

