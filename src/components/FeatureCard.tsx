
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
      <div className="p-4 flex items-start gap-3">
        <Icon className="w-6 h-6 text-banana-yellow flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="font-big-shoulders text-banana-yellow text-lg font-bold mb-2 leading-tight">
            {name}
          </h3>
          <p className="font-inter text-white text-sm leading-relaxed">
            {feature}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
