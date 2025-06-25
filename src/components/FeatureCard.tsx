
import React from 'react';

interface FeatureCardProps {
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, stage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      {/* Header with banana yellow background */}
      <div className="bg-banana-yellow px-3 py-1">
        <div className="w-1.5 h-1.5 bg-banana-black rounded-full"></div>
      </div>
      
      {/* Body with banana black background */}
      <div className="bg-banana-black p-3">
        <p className="font-inter text-white text-xs leading-tight">
          {feature}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
