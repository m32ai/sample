
import React from 'react';
import { Banana, Bolt, Rocket, Target } from 'lucide-react';

interface RoadmapCardProps {
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
  features: string[];
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ stage, features }) => {
  const getIcon = () => {
    switch (stage) {
      case 'LIVE':
        return <Banana className="w-8 h-8 text-banana-black" />;
      case 'NOW':
        return <Bolt className="w-8 h-8 text-banana-black" />;
      case 'NEXT':
        return <Rocket className="w-8 h-8 text-banana-black" />;
      case 'LATER':
        return <Target className="w-8 h-8 text-banana-black" />;
    }
  };

  const getEmoji = () => {
    switch (stage) {
      case 'LIVE':
        return '✅';
      case 'NOW':
        return '🔨';
      case 'NEXT':
        return '📝';
      case 'LATER':
        return '🔭';
    }
  };

  const getDescription = () => {
    switch (stage) {
      case 'LIVE':
        return '(shipping alpha today)';
      case 'NOW':
        return '';
      case 'NEXT':
        return '';
      case 'LATER':
        return '';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-banana-yellow px-6 py-4 flex items-center gap-3">
        {getIcon()}
        <div>
          <h2 className="font-big-shoulders text-2xl font-bold text-banana-black">
            {getEmoji()} {stage}
          </h2>
          {getDescription() && (
            <p className="font-inter text-sm text-banana-black/80 font-medium">
              {getDescription()}
            </p>
          )}
        </div>
      </div>
      
      {/* Body */}
      <div className="bg-banana-black p-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="font-inter text-white text-sm leading-relaxed">
              <span className="text-banana-yellow font-semibold">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCard;
