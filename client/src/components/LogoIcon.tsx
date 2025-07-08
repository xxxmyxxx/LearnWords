import React from "react";
import logo from '../assets/icon.png'; // Updated import

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8", // Adjusted for better visibility
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img 
        src={logo} 
        alt="Learn Words Logo" 
        className={`${sizeClasses[size]} rounded-lg`} 
      />
    </div>
  );
};

export default LogoIcon;
