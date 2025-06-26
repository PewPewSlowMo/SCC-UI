import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MetricCard from '../components/MetricCard';
import { FaUsers, FaPhone, FaPhoneAlt, FaPercentage, FaSearch } from 'react-icons/fa';

const Operators = () => {
  const { isDark } = useTheme();

  const bgColor = isDark 
    ? 'bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen'
    : 'bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen';

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-300' : 'text-gray-600';

  const selectBg = isDark 
    ? 'bg-slate-700 border-slate-600 text-white'
    : 'bg-white border-gray-300 text-gray-900';

  const cardBg = isDark 
    ? 'bg-slate-700/80 backdrop-blur-lg border border-slate-600/30' 
    : 'bg-white backdrop-blur-lg border-2 border-blue-200';

  const cardShadow = isDark
    ? 'shadow-lg shadow-black/30'
    : 'shadow-lg shadow-blue-500/10';

  const operatorsData = [
    { 
      name: 'Мария Сидорова', 
      group: 'Группа поддержки', 
      totalCalls: 640, 
      answered: 640, 
      missed: 0,
      avgTalkTime: '15:44',
      efficiency: 100,
      status: 'online'
    },
    { 
      name: 'Алексей Смирнов', 
      group: 'Группа продаж', 
      totalCalls: 594, 
      answered: 594, 
      missed: 0,
      avgTalkTime: '16:07',
      efficiency: 100,
      status: 'busy'
    },
    { 
      name: 'Петр Иванов', 
      group: 'Группа поддержки', 
      totalCalls: 592, 
      answered: 592, 
      missed: 0,
      avgTalkTime: '15:39',
      efficiency: 100,
      status: 'online'
    },
    { 
      name: 'Дмитрий Попов', 
      group: 'VIP группа', 
      totalCalls: 588, 
      answered: 586, 
      missed: 2,
      avgTalkTime: '15:52',
      efficiency: 99.7,
      status: 'online'
    },
    { 
      name: 'Елена Козлова', 
      group: 'Группа продаж', 
      totalCalls: 552, 
      answered: 548, 
      missed: 4,
      avgTalkTime: '16:28',
      efficiency: 99.3,
      status: 'offline'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-emerald-100 text-emerald-800';
      case 'busy':
        return 'bg-red-100 text-red-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 100) return isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (efficiency >= 98) return isDark ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-800 border-red-300';
  };

  // Подсчитываем общую статистику
  const totalOperators = operatorsData.length;
  const totalCalls = operatorsData.reduce((sum, op) => sum + op.totalCalls, 0);
  const totalAnswered = operatorsData.reduce((sum, op) => sum + op.answered, 0);
  const totalMissed = operatorsData.reduce((sum, op) => sum + op.missed, 0);
  const avgEfficiency = (operatorsData.reduce((sum, op) => sum + op.efficiency, 0) / totalOperators).toFixed(1);

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>Отчеты по операторам</h1>
          <p className={textSecondary}>Производительность и статистика работы операторов</p>
        </div>

        {/* Фильтры и поиск */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary}`} />
            <input
              type="text"
              placeholder="Поиск по имени или группе..."
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}
            />
          </div>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все группы</option>
            <option>Группа поддержки</option>
            <option>Группа продаж</option>
            <option>VIP группа</option>
          </select>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Сегодня</option>
            <option>Вчера</option>
            <option>Эта неделя</option>
            <option>Этот месяц</option>
          </select>
        </div>

        {/* Карточки общей статистики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Всего операторов"
            value={totalOperators.toString()}
            icon={FaUsers}
            color="blue"
          />
          <MetricCard
            title="Общее количество звонков"
            value={totalCalls.toString()}
            icon={FaPhone}
            color="green"
          />
          <MetricCard
            title="Отвечено звонков"
            value={totalAnswered.toString()}
            icon={FaPhoneAlt}
            color="green"
          />
          <MetricCard
            title="Средняя эффективность"
            value={`${avgEfficiency}%`}
            icon={FaPercentage}
            color="purple"
          />
        </div>

        {/* Таблица операторов */}
        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold ${textPrimary}`}>Детальная статистика операторов</h3>
            <p className={`text-sm ${textSecondary} mt-1`}>Показано {operatorsData.length} из {operatorsData.length} операторов</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Имя оператора
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Группа
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Всего звонков
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Отвечено
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Пропущено
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Ср. время разговора
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Эффективность
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                {operatorsData.map((operator, index) => (
                  <tr key={index} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 ${index % 3 === 0 ? 'bg-blue-600' : index % 3 === 1 ? 'bg-purple-600' : 'bg-green-600'} rounded-full flex items-center justify-center mr-3`}>
                          <span className="text-white font-bold text-sm">
                            {operator.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className={`font-medium ${textPrimary}`}>{operator.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${isDark ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-300'} text-xs font-medium px-2.5 py-0.5 rounded`}>
                        {operator.group}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textPrimary}`}>
                      {operator.totalCalls}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textPrimary}`}>
                      {operator.answered}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${operator.missed > 0 ? 'text-red-500' : textPrimary}`}>
                      {operator.missed}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {operator.avgTalkTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getEfficiencyColor(operator.efficiency)}`}>
                        {operator.efficiency}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(operator.status)}`}>
                        {getStatusText(operator.status)}
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

export default Operators;