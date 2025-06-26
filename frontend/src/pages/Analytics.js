import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaChartLine, FaChartPie, FaClock, FaTrophy } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Analytics = () => {
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

  // Данные для динамики звонков (по дням)
  const callTrendsData = [
    { day: 'Пн', calls: 245, answered: 220, avgTime: 4.2 },
    { day: 'Вт', calls: 267, answered: 241, avgTime: 4.1 },
    { day: 'Ср', calls: 234, answered: 215, avgTime: 4.3 },
    { day: 'Чт', calls: 289, answered: 265, avgTime: 3.9 },
    { day: 'Пт', calls: 298, answered: 278, avgTime: 3.8 },
    { day: 'Сб', calls: 156, answered: 142, avgTime: 4.5 },
    { day: 'Вс', calls: 134, answered: 125, avgTime: 4.7 }
  ];

  // Данные для распределения по статусам
  const statusData = [
    { name: 'Отвечено', value: 1486, color: '#10b981' },
    { name: 'Пропущено', value: 137, color: '#ef4444' },
    { name: 'Занято', value: 45, color: '#f59e0b' },
    { name: 'Отклонено', value: 23, color: '#6b7280' }
  ];

  // Данные для средней длительности по операторам
  const operatorDurationData = [
    { name: 'Мария С.', duration: 15.8, calls: 156 },
    { name: 'Алексей С.', duration: 14.2, calls: 142 },
    { name: 'Петр И.', duration: 16.5, calls: 134 },
    { name: 'Елена К.', duration: 13.9, calls: 128 },
    { name: 'Дмитрий П.', duration: 17.2, calls: 119 }
  ];

  // Топ операторы
  const topOperators = [
    { name: 'Мария Сидорова', calls: 156, efficiency: 100, avgTime: '15:48' },
    { name: 'Алексей Смирнов', calls: 142, efficiency: 99.8, avgTime: '14:12' },
    { name: 'Петр Иванов', calls: 134, efficiency: 99.5, avgTime: '16:30' },
    { name: 'Елена Козлова', calls: 128, efficiency: 99.2, avgTime: '13:54' },
    { name: 'Дмитрий Попов', calls: 119, efficiency: 98.9, avgTime: '17:12' }
  ];

  // Данные для временных интервалов
  const hourlyData = [
    { hour: '09:00', calls: 45 },
    { hour: '10:00', calls: 67 },
    { hour: '11:00', calls: 78 },
    { hour: '12:00', calls: 56 },
    { hour: '13:00', calls: 34 },
    { hour: '14:00', calls: 89 },
    { hour: '15:00', calls: 92 },
    { hour: '16:00', calls: 78 },
    { hour: '17:00', calls: 65 },
    { hour: '18:00', calls: 43 }
  ];

  const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#6b7280'];

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>Аналитика</h1>
          <p className={textSecondary}>Углубленный анализ производительности и трендов</p>
        </div>

        {/* Фильтры */}
        <div className="flex gap-4 mb-8">
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Последние 7 дней</option>
            <option>Последние 30 дней</option>
            <option>Этот месяц</option>
            <option>Прошлый месяц</option>
          </select>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все группы</option>
            <option>Группа поддержки</option>
            <option>Группа продаж</option>
            <option>VIP группа</option>
          </select>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все очереди</option>
            <option>Основная очередь</option>
            <option>Техподдержка</option>
            <option>Продажи</option>
          </select>
        </div>

        {/* Основные графики */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Динамика звонков */}
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4 flex items-center gap-2`}>
              <FaChartLine className="text-blue-500" />
              Динамика звонков
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={callTrendsData}>
                  <defs>
                    <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorAnswered" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="day" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                  <Area type="monotone" dataKey="calls" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCalls)" name="Всего звонков" />
                  <Area type="monotone" dataKey="answered" stroke="#10b981" fillOpacity={1} fill="url(#colorAnswered)" name="Отвечено" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Распределение по статусам */}
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4 flex items-center gap-2`}>
              <FaChartPie className="text-green-500" />
              Распределение по статусам
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelStyle={{ fontSize: '12px', fill: isDark ? '#ffffff' : '#000000' }}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Второй ряд графиков */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Средняя длительность разговоров */}
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4 flex items-center gap-2`}>
              <FaClock className="text-purple-500" />
              Средняя длительность (мин)
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={operatorDurationData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis type="number" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <YAxis dataKey="name" type="category" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                  <Bar dataKey="duration" fill={isDark ? '#a855f7' : '#9333ea'} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Почасовая активность */}
          <div className={`${cardBg} p-6 rounded-xl ${cardShadow}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Почасовая активность</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="hour" stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#374151' : '#ffffff',
                      border: isDark ? '1px solid #4b5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke={isDark ? '#06b6d4' : '#0891b2'} 
                    strokeWidth={3}
                    dot={{ fill: isDark ? '#06b6d4' : '#0891b2', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Топ операторы */}
        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold ${textPrimary} flex items-center gap-2`}>
              <FaTrophy className="text-yellow-500" />
              Топ-операторы по производительности
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Рейтинг
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Имя оператора
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Обработано звонков
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Эффективность
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Ср. время разговора
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                {topOperators.map((operator, index) => (
                  <tr key={index} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-gray-400' : 
                          index === 2 ? 'bg-amber-600' : 'bg-blue-500'
                        }`}>
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-medium ${textPrimary}`}>{operator.name}</span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textPrimary}`}>
                      {operator.calls}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full border ${
                        operator.efficiency >= 100 
                          ? isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : isDark ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                      }`}>
                        {operator.efficiency}%
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {operator.avgTime}
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

export default Analytics;