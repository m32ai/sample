
import React from 'react';

interface FeatureCardProps {
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, stage }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Header with banana yellow background */}
      <div className="bg-banana-yellow px-4 py-2">
        <div className="w-2 h-2 bg-banana-black rounded-full"></div>
      </div>
      
      {/* Body with banana black background */}
      <div className="bg-banana-black p-4">
        <p className="font-inter text-white text-sm leading-relaxed">
          {feature}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
