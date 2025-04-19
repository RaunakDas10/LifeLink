import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface BloodType {
  type: string;
  level: 'high' | 'medium' | 'low' | 'critical';
  count: number;
}

interface BloodTypeCardProps {
  blood: BloodType;
}

const BloodTypeCard: React.FC<BloodTypeCardProps> = ({ blood }) => {
  const getBgColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-green-600';
      case 'medium':
        return 'bg-blue-600';
      case 'low':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getTextColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'text-green-700';
      case 'medium':
        return 'text-blue-700';
      case 'low':
        return 'text-yellow-700';
      case 'critical':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'high':
        return 'Sufficient';
      case 'medium':
        return 'Moderate';
      case 'low':
        return 'Low';
      case 'critical':
        return 'Critical';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="card p-4 flex flex-col items-center justify-center">
      <div className={`blood-type-badge ${getBgColor(blood.level)}`}>
        {blood.type}
      </div>
      
      <h3 className="text-lg font-semibold mt-3">{blood.type}</h3>
      
      <div className={`flex items-center mt-2 ${getTextColor(blood.level)}`}>
        {blood.level === 'critical' && (
          <AlertTriangle className="h-4 w-4 mr-1 text-red-600" />
        )}
        <span className="text-sm font-medium">{getLevelText(blood.level)}</span>
      </div>
      
      <p className="mt-1 text-sm text-gray-500">
        {blood.count} units available
      </p>
    </div>
  );
};

export default BloodTypeCard;