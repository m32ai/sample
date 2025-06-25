
import React from 'react';

interface FeatureCardProps {
  feature: string;
  stage: 'LIVE' | 'NOW' | 'NEXT' | 'LATER';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, stage }) => {
  const getStageColor = () => {
    switch (stage) {
      case 'LIVE':
        return 'border-green-500';
      case 'NOW':
        return 'border-blue-500';
      case 'NEXT':
        return 'border-purple-500';
      case 'LATER':
        return 'border-orange-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 border-l-4 ${getStageColor()} h-full`}>
      <p className="font-inter text-sm text-gray-800 leading-relaxed">
        {feature}
      </p>
    </div>
  );
};

export default FeatureCard;
