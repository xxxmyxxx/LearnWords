import React from "react";

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };
  
  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2.5 h-2.5",
    lg: "w-3.5 h-3.5",
  };

  return (
    <div className={`flex-shrink-0 rounded-lg bg-white shadow-md flex items-center justify-center ${sizeClasses[size]} p-1 ${className}`}>
      <div className="flex flex-col items-center justify-center gap-1">
        <span className={`${dotSizes[size]} rounded-full bg-[#2ECC71]`}></span>
        <span className={`${dotSizes[size]} rounded-full bg-[#F1C40F]`}></span>
        <span className={`${dotSizes[size]} rounded-full bg-[#E74C3C]`}></span>
        <span className={`${dotSizes[size]} rounded-full bg-[#4A90E2]`}></span>
      </div>
    </div>
  );
};

export default LogoIcon;
