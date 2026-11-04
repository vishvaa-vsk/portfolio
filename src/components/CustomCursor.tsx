import { useEffect, useRef, useState } from "react";

// Precision Industrial Cyber Tactical Pointer (Tip at 0, 0)
const CyberPointer = ({
  isHovered,
  isClicked,
}: {
  isHovered: boolean;
  isClicked: boolean;
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`will-change-transform transition-transform duration-150 ease-out origin-top-left ${
      isClicked
        ? "scale-90 -translate-x-0.5 -translate-y-0.5"
        : isHovered
        ? "scale-105"
        : "scale-100"
    }`}
    style={{
      filter: "drop-shadow(0 2px 7px rgba(249, 115, 22, 0.45))",
    }}
  >
    <defs>
      <linearGradient
        id="cyberPointerOrange"
        x1="0"
        y1="0"
        x2="16"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="55%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient
        id="cyberPointerSlate"
        x1="0"
        y1="0"
        x2="10"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#C2410C" />
        <stop offset="100%" stopColor="#7C2D12" />
      </linearGradient>
    </defs>

    {/* Bottom/Left Shaded Facet */}
    <path
      d="M 0 0 L 8.5 8.5 L 5.5 16 Z"
      fill="url(#cyberPointerSlate)"
      stroke="rgba(249, 115, 22, 0.35)"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />

    {/* Top/Right High-Voltage Facet */}
    <path
      d="M 0 0 L 16 5.5 L 8.5 8.5 Z"
      fill="url(#cyberPointerOrange)"
      stroke="rgba(255, 255, 255, 0.65)"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />

    {/* Electric Cyan Spine Divider */}
    <line
      x1="0"
      y1="0"
      x2="8.5"
      y2="8.5"
      stroke="#06B6D4"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Precision Tip Beacon Pip */}
    <circle cx="0.5" cy="0.5" r="0.75" fill="#22D3EE" />
  </svg>
);

// High-Tech Industrial Corner-Bracket Target Reticle (Centered at 0, 0)
const TacticalReticle = ({ isClicked }: { isClicked: boolean }) => (
  <svg
    width="48"
    height="48"
    viewBox="-24 -24 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-200 ease-out ${
      isClicked ? "scale-75 rotate-45" : "scale-100 rotate-0"
    }`}
    style={{
      filter: "drop-shadow(0 0 6px rgba(6, 182, 212, 0.55))",
    }}
  >
    {/* 4 Corner Target Brackets in Electric Cyan */}
    <path
      d="M -16 -9 L -16 -16 L -9 -16"
      stroke="#06B6D4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 9 -16 L 16 -16 L 16 -9"
      stroke="#06B6D4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 16 9 L 16 16 L 9 16"
      stroke="#06B6D4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M -9 16 L -16 16 L -16 9"
      stroke="#06B6D4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* 4 High-Voltage Orange Calibration Ticks */}
    <line
      x1="0"
      y1="-16"
      x2="0"
      y2="-12"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="0"
      y1="12"
      x2="0"
      y2="16"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="-16"
      y1="0"
      x2="-12"
      y2="0"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="0"
      x2="16"
      y2="0"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Center Telemetry Crosshair */}
    <line
      x1="-3"
      y1="0"
      x2="3"
      y2="0"
      stroke="#22D3EE"
      strokeWidth="1"
      strokeOpacity="0.85"
    />
    <line
      x1="0"
      y1="-3"
      x2="0"
      y2="3"
      stroke="#22D3EE"
      strokeWidth="1"
      strokeOpacity="0.85"
    />

    {/* Subtle Inner Radar Dash Ring */}
    <circle
      cx="0"
      cy="0"
      r="8"
      stroke="#06B6D4"
      strokeWidth="0.75"
      strokeOpacity="0.35"
      strokeDasharray="2 3"
    />
  </svg>
);

// Minimalist Telemetry Tracker Dot (Visible when cruising across text & background)
const TelemetryDot = () => (
  <div className="relative flex items-center justify-center">
    <span
      className="absolute w-3.5 h-3.5 rounded-full border border-[#06B6D4]/40 animate-ping"
      style={{ animationDuration: "2.8s" }}
    />
    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
  </div>
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
        document.documentElement.classList.add("custom-cursor-active");
      }
    };

    // 3. Hover state listener
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

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

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 6. 120fps hardware-accelerated lerp loop
    const updateCursor = () => {
      const speed = 0.2; // Smooth tracking speed

      lagCoords.current.x += (coords.current.x - lagCoords.current.x) * speed;
      lagCoords.current.y += (coords.current.y - lagCoords.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${coords.current.x}px, ${coords.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${lagCoords.current.x}px, ${lagCoords.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

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

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible && hasMoved.current ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Trailing Target Reticle / Telemetry Dot (Lagging position) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform flex items-center justify-center"
        style={{
          width: "1px",
          height: "1px",
        }}
      >
        {/* Telemetry dot beacon (visible when not hovering) */}
        <div
          className={`absolute transition-all duration-200 ease-out ${
            isHovered ? "scale-0 opacity-0" : "scale-100 opacity-80"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <TelemetryDot />
        </div>

        {/* Industrial Tactical Bracket Reticle (snaps on hover) */}
        <div
          className={`absolute transition-all duration-200 ease-out ${
            isHovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <TacticalReticle isClicked={isClicked} />
        </div>
      </div>

      {/* 2. Main Precision Pointer (Real-time 1:1 hardware position) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{
          width: "1px",
          height: "1px",
        }}
      >
        <div className="absolute top-0 left-0">
          <CyberPointer isHovered={isHovered} isClicked={isClicked} />
        </div>

        {/* Tactical Click Flash */}
        {isClicked && (
          <span
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#F97316] animate-ping opacity-75 pointer-events-none"
            style={{ animationDuration: "0.6s" }}
          />
        )}
      </div>
    </div>
  );
}
