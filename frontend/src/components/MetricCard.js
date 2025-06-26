import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const MetricCard = ({ title, value, icon: Icon, trend, trendValue, color = 'blue' }) => {
  const { isDark } = useTheme();

  const cardBg = isDark 
    ? 'bg-slate-700/80 backdrop-blur-lg border border-slate-600/30' 
    : 'bg-white backdrop-blur-lg border-2 border-blue-200';

  const cardShadow = isDark
    ? 'shadow-lg shadow-black/30'
    : 'shadow-lg shadow-blue-500/10';

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-gray-600';

  const iconBg = {
    blue: 'bg-blue-600',
    green: 'bg-green-600', 
    red: 'bg-red-600',
    purple: 'bg-purple-600'
  };

  const iconShadow = isDark ? {
    blue: 'shadow-blue-500/30',
    green: 'shadow-green-500/30',
    red: 'shadow-red-500/30', 
    purple: 'shadow-purple-500/30'
  } : {};

  const trendColor = trend === 'up' ? 'text-emerald-400' : 'text-red-400';

  return (
    <div className={`metric-card ${cardBg} p-6 rounded-xl ${cardShadow} transition-all duration-300 hover:transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`${textSecondary} text-sm`}>{title}</p>
          <p className={`text-3xl font-bold ${textPrimary}`}>{value}</p>
        </div>
        <div className={`w-12 h-12 ${iconBg[color]} rounded-full flex items-center justify-center ${isDark ? `shadow-lg ${iconShadow[color]}` : 'shadow-lg'}`}>
          <Icon className="text-white" />
        </div>
      </div>
      {trendValue && (
        <div className="mt-4">
          <span className={`${trendColor} text-sm`}>{trendValue}</span>
          <span className={`${textSecondary} text-sm ml-2`}>от вчера</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;