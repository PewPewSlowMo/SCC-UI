import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MetricCard from '../components/MetricCard';
import { FaList, FaPhone, FaClock, FaPercentage } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Queues = () => {
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

  const queuesData = [
    {
      name: 'Основная очередь',
      totalCalls: 896,
      answered: 755,
      missed: 141,
      avgWait: '2:30',
      avgTalk: '15:51',
      serviceLevel: 84,
      answerRate: 84
    },
    {
      name: 'Техподдержка',
      totalCalls: 865,
      answered: 748,
      missed: 117,
      avgWait: '2:30',
      avgTalk: '16:03',
      serviceLevel: 86,
      answerRate: 86
    },
    {
      name: 'Продажи',
      totalCalls: 833,
      answered: 737,
      missed: 116,
      avgWait: '2:32',
      avgTalk: '15:55',
      serviceLevel: 86,
      answerRate: 88
    },
    {
      name: 'VIP клиенты',
      totalCalls: 834,
      answered: 726,
      missed: 128,
      avgWait: '2:27',
      avgTalk: '16:08',
      serviceLevel: 85,
      answerRate: 87
    }
  ];

  // Данные для графика
  const chartData = queuesData.map(queue => ({
    name: queue.name.split(' ')[0], // Короткое название для графика
    answered: queue.answered,
    missed: queue.missed
  }));

  // Общая статистика
  const totalQueues = queuesData.length;
  const totalCalls = queuesData.reduce((sum, q) => sum + q.totalCalls, 0);
  const totalAnswered = queuesData.reduce((sum, q) => sum + q.answered, 0);
  const totalMissed = queuesData.reduce((sum, q) => sum + q.missed, 0);
  const avgWait = '2:30'; // Среднее время ожидания
  const avgServiceLevel = Math.round(queuesData.reduce((sum, q) => sum + q.serviceLevel, 0) / totalQueues);

  const getServiceLevelColor = (level) => {
    if (level >= 85) return isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (level >= 70) return isDark ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-800 border-red-300';
  };

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>Отчеты по очередям</h1>
          <p className={textSecondary}>Статистика работы очередей и распределение звонков</p>
        </div>

        {/* Фильтры */}
        <div className="flex gap-4 mb-8">
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все очереди</option>
            <option>Основная очередь</option>
            <option>Техподдержка</option>
            <option>Продажи</option>
            <option>VIP клиенты</option>
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
            title="Всего очередей"
            value={totalQueues.toString()}
            icon={FaList}
            color="blue"
          />
          <MetricCard
            title="Всего звонков"
            value={totalCalls.toString()}
            icon={FaPhone}
            color="green"
          />
          <MetricCard
            title="Среднее ожидание"
            value={avgWait}
            icon={FaClock}
            color="purple"
          />
          <MetricCard
            title="Уровень обслуживания"
            value={`${avgServiceLevel}%`}
            icon={FaPercentage}
            color="blue"
          />
        </div>

        {/* График */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Сравнение производительности очередей</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                  <Bar dataKey="answered" stackId="a" fill={isDark ? '#10b981' : '#059669'} name="Отвечено" />
                  <Bar dataKey="missed" stackId="a" fill={isDark ? '#ef4444' : '#dc2626'} name="Пропущено" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Таблица очередей */}
        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold ${textPrimary}`}>Детальная статистика очередей</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Название очереди
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
                    Ср. ожидание
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Ср. разговор
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Уровень обслуживания (%)
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Процент ответов
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                {queuesData.map((queue, index) => (
                  <tr key={index} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${index % 4 === 0 ? 'bg-blue-500' : index % 4 === 1 ? 'bg-green-500' : index % 4 === 2 ? 'bg-purple-500' : 'bg-yellow-500'} rounded-full mr-3`}></div>
                        <span className={`font-medium ${textPrimary}`}>{queue.name}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textPrimary}`}>
                      {queue.totalCalls}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600`}>
                      {queue.answered}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600`}>
                      {queue.missed}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {queue.avgWait}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {queue.avgTalk}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getServiceLevelColor(queue.serviceLevel)}`}>
                        {queue.serviceLevel}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getServiceLevelColor(queue.answerRate)}`}>
                        {queue.answerRate}%
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

export default Queues;