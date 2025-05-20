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
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className={`flex-shrink-0 rounded-lg bg-white shadow-md flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <span className="flex items-center space-x-1">
        <span className={`inline-block ${dotSizes[size]} rounded-full bg-[#2ECC71]`}></span>
        <span className={`inline-block ${dotSizes[size]} rounded-full bg-[#F1C40F]`}></span>
        <span className={`inline-block ${dotSizes[size]} rounded-full bg-[#E74C3C]`}></span>
      </span>
    </div>
  );
};

export default LogoIcon;
