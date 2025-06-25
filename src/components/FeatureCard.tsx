
import React from 'react';

interface FeatureCardProps {
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, stage }) => {
  return (
    <div className="bg-banana-black rounded-lg shadow-md overflow-hidden h-full border-l-4 border-banana-yellow">
      <div className="p-3">
        <p className="font-inter text-white text-xs leading-tight">
          {feature}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
