import { HTMLAttributes } from "react";

interface TerminalIconProps extends HTMLAttributes<SVGElement> {
  className?: string;
}

export const TerminalIcon = ({ className, ...props }: TerminalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Vertical line for $ */}
    <line x1="9.5" y1="5" x2="9.5" y2="19" />
    {/* S-curve for $ */}
    <path d="M12.5 7.5H8a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6" />
    {/* Cursor line _ */}
    <line x1="16" y1="17" x2="20" y2="17" />
  </svg>
);
