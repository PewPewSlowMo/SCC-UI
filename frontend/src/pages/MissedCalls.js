import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MetricCard from '../components/MetricCard';
import { FaPhoneSlash, FaClock, FaExclamationTriangle, FaSearch, FaFileExport } from 'react-icons/fa';

const MissedCalls = () => {
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

  const buttonBg = isDark
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  const missedCallsData = [
    {
      phone: '+7(384)331846',
      queue: 'Екатеринбург',
      datetime: '20.06.2025, 23:36:09',
      waitTime: '5:24',
      reason: 'Превышено время ожидания'
    },
    {
      phone: '+7(495)123-45-67',
      queue: 'Основная очередь',
      datetime: '20.06.2025, 22:15:33',
      waitTime: '3:45',
      reason: 'Клиент отключился'
    },
    {
      phone: '+7(812)987-65-43',
      queue: 'Техподдержка',
      datetime: '20.06.2025, 21:42:18',
      waitTime: '7:12',
      reason: 'Нет свободных операторов'
    },
    {
      phone: '+7(343)555-77-88',
      queue: 'Продажи',
      datetime: '20.06.2025, 20:28:45',
      waitTime: '4:33',
      reason: 'Превышено время ожидания'
    },
    {
      phone: '+7(921)111-22-33',
      queue: 'VIP клиенты',
      datetime: '20.06.2025, 19:57:21',
      waitTime: '2:18',
      reason: 'Клиент отключился'
    },
    {
      phone: '+7(499)444-55-66',
      queue: 'Основная очередь',
      datetime: '20.06.2025, 19:23:12',
      waitTime: '6:05',
      reason: 'Нет свободных операторов'
    },
    {
      phone: '+7(383)777-88-99',
      queue: 'Техподдержка',
      datetime: '20.06.2025, 18:45:36',
      waitTime: '3:27',
      reason: 'Превышено время ожидания'
    }
  ];

  // Общая статистика
  const totalMissed = missedCallsData.length;
  const avgWaitTime = '4:32'; // Среднее время ожидания
  const maxWaitTime = '7:12'; // Максимальное время ожидания
  const mainReason = 'Превышено время ожидания'; // Основная причина

  const getReasonColor = (reason) => {
    switch (reason) {
      case 'Превышено время ожидания':
        return isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-800 border-red-300';
      case 'Клиент отключился':
        return isDark ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Нет свободных операторов':
        return isDark ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return isDark ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getQueueColor = (queue) => {
    const colors = [
      isDark ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-800 border-blue-300',
      isDark ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-800 border-green-300',
      isDark ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-800 border-purple-300',
      isDark ? 'bg-pink-500/20 text-pink-400 border-pink-500/30' : 'bg-pink-100 text-pink-800 border-pink-300'
    ];
    return colors[queue.length % colors.length];
  };

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>Пропущенные звонки</h1>
          <p className={textSecondary}>Детальная информация о пропущенных звонках и причинах</p>
        </div>

        {/* Фильтры и поиск */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary}`} />
            <input
              type="text"
              placeholder="Поиск по номеру телефона..."
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}
            />
          </div>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Все очереди</option>
            <option>Основная очередь</option>
            <option>Техподдержка</option>
            <option>Продажи</option>
            <option>VIP клиенты</option>
            <option>Екатеринбург</option>
          </select>
          <select className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectBg}`}>
            <option>Сегодня</option>
            <option>Вчера</option>
            <option>Эта неделя</option>
            <option>Этот месяц</option>
          </select>
          <button className={`px-6 py-2 text-white rounded-lg transition-all ${buttonBg} flex items-center gap-2`}>
            <FaFileExport />
            Экспорт
          </button>
        </div>

        {/* Карточки статистики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Всего пропущено"
            value={totalMissed.toString()}
            icon={FaPhoneSlash}
            color="red"
          />
          <MetricCard
            title="Среднее ожидание"
            value={avgWaitTime}
            icon={FaClock}
            color="blue"
          />
          <MetricCard
            title="Максимальное ожидание"
            value={maxWaitTime}
            icon={FaClock}
            color="purple"
          />
          <MetricCard
            title="Основная причина"
            value="Превышено время"
            icon={FaExclamationTriangle}
            color="red"
          />
        </div>

        {/* Таблица пропущенных звонков */}
        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-600' : 'border-gray-200'} flex justify-between items-center`}>
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary}`}>Список пропущенных звонков</h3>
              <p className={`text-sm ${textSecondary} mt-1`}>Показано {missedCallsData.length} звонков</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Телефон
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Очередь
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Дата и время
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Время ожидания
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                    Причина
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                {missedCallsData.map((call, index) => (
                  <tr key={index} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaPhoneSlash className="text-red-500 mr-3" />
                        <span className={`font-medium ${textPrimary}`}>{call.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${getQueueColor(call.queue)}`}>
                        {call.queue}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                      {call.datetime}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textPrimary}`}>
                      {call.waitTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${getReasonColor(call.reason)}`}>
                        {call.reason}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className={`px-6 py-4 border-t ${isDark ? 'border-slate-600' : 'border-gray-200'} flex justify-between items-center`}>
            <span className={`text-sm ${textSecondary}`}>
              Показано 1-{missedCallsData.length} из {missedCallsData.length} результатов
            </span>
            <div className="flex gap-2">
              <button className={`px-3 py-1 border rounded ${isDark ? 'border-slate-600 text-slate-400' : 'border-gray-300 text-gray-500'} hover:bg-slate-700 transition-colors`}>
                Предыдущая
              </button>
              <button className={`px-3 py-1 border rounded bg-blue-600 text-white border-blue-600`}>
                1
              </button>
              <button className={`px-3 py-1 border rounded ${isDark ? 'border-slate-600 text-slate-400' : 'border-gray-300 text-gray-500'} hover:bg-slate-700 transition-colors`}>
                Следующая
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MissedCalls;