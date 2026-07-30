import React from "react";

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  position?: "top" | "bottom";
}

export default function WaveDivider({
  fillColor = "#051F20",
  className = "",
  position = "bottom",
}: WaveDividerProps) {
  const rotateClass = position === "top" ? "rotate-180" : "";

  return (
    <div className={`w-full overflow-hidden leading-[0] ${rotateClass} ${className}`}>
      <svg
        className="relative block w-[calc(130%+1.3px)] h-[80px] md:h-[120px] lg:h-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={fillColor}
        ></path>
      </svg>
    </div>
  );
}
