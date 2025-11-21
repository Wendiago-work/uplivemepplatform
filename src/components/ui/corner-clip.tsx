import React from "react";

export const CornerClip = ({ corner, className }: { corner: "topRight" | "bottomLeft"; className?: string }) => (
  <span
    className={`absolute text-background block w-[clamp(140px,18vw,220px)] h-[clamp(50px,7vw,90px)] pointer-events-none z-20 ${
      corner === "topRight" ? "top-[-6px] right-0 rotate-180" : "bottom-[-6px] left-0"
    } ${className || ""}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full fill-current"
    >
      <path d="M147.269 54.72L117.876 25.28C114.502 21.9015 109.919 20 105.145 20H0V60H160C155.226 60 150.642 58.0985 147.269 54.72Z" />
      <path d="M0 0V20H20C8.95435 20 0 11.0457 0 0Z" />
    </svg>
  </span>
);
