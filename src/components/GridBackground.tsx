import { memo } from "react";

const GridBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      {/* Ambient glowing mesh gradients */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[65vw] max-w-[900px] h-[500px] bg-orange-500/10 dark:bg-orange-600/[0.09] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[15%] -left-[10%] w-[45vw] max-w-[600px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[45%] -right-[10%] w-[40vw] max-w-[550px] h-[400px] bg-amber-500/5 dark:bg-amber-600/[0.05] blur-[130px] rounded-full pointer-events-none" />

      {/* Geometric Dot Grid Canvas Pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          color: "rgba(138, 153, 173, 0.3)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle Linear Grid Accent Lines */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
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

