
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  name: string;
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ name, feature, stage, icon: Icon }) => {
  return (
    <div className="bg-banana-black rounded-lg shadow-md overflow-hidden h-full border-l-4 border-banana-yellow">
      <div className="p-3 flex items-start gap-3">
        <Icon className="w-5 h-5 text-banana-yellow flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-big-shoulders text-banana-yellow text-sm font-bold mb-1">
            {name}
          </h3>
          <p className="font-inter text-white text-sm leading-tight">
            {feature}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
