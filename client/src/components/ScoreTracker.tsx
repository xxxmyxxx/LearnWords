import React from "react";

interface ScoreTrackerProps {
  greenScore: number;
  redScore: number;
  orangeScore: number;
  blueScore: number;
}

const ScoreTracker: React.FC<ScoreTrackerProps> = ({ 
  greenScore, 
  redScore, 
  orangeScore, 
  blueScore 
}) => {
  return (
    <div className="flex-shrink-0 rounded-lg bg-white dark:bg-slate-800 shadow-md flex items-center justify-center gap-2 p-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-sm font-medium">{greenScore}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <span className="text-sm font-medium">{redScore}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <span className="text-sm font-medium">{orangeScore}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <span className="text-sm font-medium">{blueScore}</span>
      </div>
    </div>
  );
};

export default ScoreTracker;