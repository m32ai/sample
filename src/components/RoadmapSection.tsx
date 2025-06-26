
import React from 'react';
import { Banana, Bolt, Rocket, Target, LucideIcon } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface Feature {
  name: string;
  text: string;
  icon: LucideIcon;
}

interface RoadmapSectionProps {
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
  features: Feature[];
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ stage, features }) => {
  const getIcon = () => {
    switch (stage) {
      case 'LIVE':
        return <Banana className="w-7 h-7 text-banana-black" />;
      case 'NOW':
        return <Bolt className="w-7 h-7 text-banana-black" />;
      case 'NEXT':
        return <Rocket className="w-7 h-7 text-banana-black" />;
      case 'LATER':
        return <Target className="w-7 h-7 text-banana-black" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="bg-banana-yellow px-4 py-3 rounded-lg flex items-center gap-2">
        {getIcon()}
        <h2 className="font-big-shoulders text-2xl font-bold text-banana-black">
          {stage}
        </h2>
      </div>
      
      {/* Feature Cards Grid */}
      <div className="grid gap-2">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            name={feature.name}
            feature={feature.text} 
            stage={stage} 
            icon={feature.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapSection;
