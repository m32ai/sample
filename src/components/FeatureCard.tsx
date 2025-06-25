

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, stage, icon: Icon }) => {
  return (
    <div className="bg-banana-black rounded-lg shadow-md overflow-hidden h-full border-l-4 border-banana-yellow">
      <div className="p-3 flex items-start gap-3">
        <Icon className="w-5 h-5 text-banana-yellow flex-shrink-0 mt-0.5" />
        <p className="font-inter text-white text-sm leading-tight flex-1">
          {feature}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

