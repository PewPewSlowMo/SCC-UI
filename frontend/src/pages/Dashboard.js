import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MetricCard from '../components/MetricCard';
import { FaPhone, FaPhoneAlt, FaPhoneSlash, FaChartLine, FaChartBar } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const { isDark } = useTheme();

  const bgColor = isDark 
    ? 'bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen'
    : 'bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen';

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-300' : 'text-gray-600';

  const selectBg = isDark 
    ? 'bg-slate-700 border-slate-600 text-white'
    : 'bg-white border-gray-300 text-gray-900';

  const buttonBg = isDark
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  const cardBg = isDark 
    ? 'bg-slate-700/80 backdrop-blur-lg border border-slate-600/30' 
    : 'bg-white backdrop-blur-lg border-2 border-blue-200';

  const cardShadow = isDark
    ? 'shadow-lg shadow-black/30'
    : 'shadow-lg shadow-blue-500/10';

  // Данные для графиков
  const callsData = [
    { time: '09:00', calls: 12 },
    { time: '10:00', calls: 19 },
    { time: '11:00', calls: 15 },
    { time: '12:00', calls: 25 },
    { time: '13:00', calls: 18 },
    { time: '14:00', calls: 22 },
    { time: '15:00', calls: 20 },
    { time: '16:00', calls: 17 },
  ];

  const operatorsData = [
    { name: 'Петр Иванов', status: 'online', group: 'Группа поддержки' },
    { name: 'Мария Сидорова', status: 'busy', group: 'Группа поддержки' },
    { name: 'Алексей Смирнов', status: 'online', group: 'Группа продаж' },
    { name: 'Елена Козлова', status: 'online', group: 'Группа продаж' },
    { name: 'Дмитрий Попов', status: 'offline', group: 'VIP группа' },
  ];

  const operatorsTableData = [
    { name: 'Мария Сидорова', group: 'Группа поддержки', totalCalls: 640, answered: 640, efficiency: 100 },
    { name: 'Алексей Смирнов', group: 'Группа продаж', totalCalls: 594, answered: 594, efficiency: 100 },
    { name: 'Петр Иванов', group: 'Группа поддержки', totalCalls: 592, answered: 592, efficiency: 100 },
    { name: 'Дмитрий Попов', group: 'VIP группа', totalCalls: 588, answered: 588, efficiency: 100 },
    { name: 'Елена Козлова', group: 'Группа продаж', totalCalls: 552, answered: 552, efficiency: 100 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return isDark 
          ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400'
          : 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'busy':
        return isDark
          ? 'bg-red-900/30 border-red-500/30 text-red-400'
          : 'bg-red-50 border-red-200 text-red-700';
      case 'offline':
        return isDark
          ? 'bg-gray-800/30 border-gray-600/30 text-gray-400'
          : 'bg-gray-50 border-gray-200 text-gray-700';
      default:
        return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'online': return 'Онлайн';
      case 'busy': return 'Занят';
      case 'offline': return 'Офлайн';
      default: return status;
    }
  };

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-4xl font-bold ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'} mb-2`}>
            Smart Колл Центр
          </h1>
          <p className={textSecondary}>Добро пожаловать! Обзор ключевых метрик колл-центра</p>
        </div>

        {/* Фильтры */}
        <div className="flex gap-4 mb-8">
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Сегодня</option>
            <option>Вчера</option>
            <option>Эта неделя</option>
            <option>Этот месяц</option>
          </select>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все группы</option>
            <option>Группа поддержки</option>
            <option>Группа продаж</option>
          </select>
          <button className={`px-6 py-2 text-white rounded-lg transition-all ${buttonBg} ${isDark ? 'shadow-lg shadow-blue-500/20' : 'shadow-lg'}`}>
            <FaChartBar className="mr-2 inline" />
            Обновить
          </button>
        </div>

        {/* Карточки метрик */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Всего звонков"
            value="82"
            icon={FaPhone}
            trend="up"
            trendValue="+12%"
            color="blue"
          />
          <MetricCard
            title="Отвеченные звонки"
            value="111"
            icon={FaPhoneAlt}
            trend="up"
            trendValue="+8%"
            color="green"
          />
          <MetricCard
            title="Пропущенные звонки"
            value="9"
            icon={FaPhoneSlash}
            trend="down"
            trendValue="-3%"
            color="red"
          />
          <MetricCard
            title="Уровень обслуживания"
            value="76%"
            icon={FaChartLine}
            trend="up"
            trendValue="+2%"
            color="purple"
          />
        </div>

        {/* Графики */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Распределение звонков</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={callsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="time" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                  <Bar dataKey="calls" fill={isDark ? '#3b82f6' : '#2563eb'} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Активность операторов</h3>
            <div className="space-y-4">
              {operatorsData.map((operator, index) => (
                <div key={index} className={`flex items-center justify-between p-3 ${getStatusColor(operator.status)} rounded-lg border`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${operator.status === 'online' ? 'bg-emerald-400' : operator.status === 'busy' ? 'bg-red-400' : 'bg-gray-400'} ${operator.status === 'offline' ? '' : 'animate-pulse'}`}></div>
                    <span className="font-medium">{operator.name}</span>
                  </div>
                  <span className="text-sm font-medium">{getStatusText(operator.status)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Таблица */}
        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold ${textPrimary}`}>Детальная статистика операторов</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Имя оператора
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Группа
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Всего звонков
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Отвечено
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Эффективность
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                {operatorsTableData.map((operator, index) => (
                  <tr key={index} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'} rounded-full flex items-center justify-center mr-3`}>
                          <span className="text-white font-medium text-sm">
                            {operator.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className={`font-medium ${textPrimary}`}>{operator.name}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {operator.group}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textPrimary}`}>
                      {operator.totalCalls}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textPrimary}`}>
                      {operator.answered}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                        {operator.efficiency}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;