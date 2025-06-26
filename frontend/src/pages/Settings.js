import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaUser, FaUsers, FaCog, FaDatabase, FaBell, FaShield } from 'react-icons/fa';

const Settings = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');

  const bgColor = isDark 
    ? 'bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen'
    : 'bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen';

  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-300' : 'text-gray-600';

  const cardBg = isDark 
    ? 'bg-slate-700/80 backdrop-blur-lg border border-slate-600/30' 
    : 'bg-white backdrop-blur-lg border-2 border-blue-200';

  const cardShadow = isDark
    ? 'shadow-lg shadow-black/30'
    : 'shadow-lg shadow-blue-500/10';

  const inputBg = isDark 
    ? 'bg-slate-700 border-slate-600 text-white'
    : 'bg-white border-gray-300 text-gray-900';

  const buttonBg = isDark
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  const tabActive = isDark
    ? 'border-blue-500 text-blue-400 bg-slate-800/50'
    : 'border-blue-500 text-blue-600 bg-blue-50';

  const tabInactive = isDark
    ? 'border-transparent text-slate-400 hover:text-slate-300 hover:border-slate-600'
    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';

  const tabs = [
    { id: 'profile', label: 'Профиль', icon: FaUser },
    { id: 'users', label: 'Пользователи', icon: FaUsers },
    { id: 'system', label: 'Система', icon: FaCog },
    { id: 'integrations', label: 'Интеграции', icon: FaDatabase },
    { id: 'notifications', label: 'Уведомления', icon: FaBell },
    { id: 'security', label: 'Безопасность', icon: FaShield }
  ];

  const users = [
    { id: 1, name: 'Мария Сидорова', email: 'maria@callcenter.com', role: 'Оператор', group: 'Группа поддержки', status: 'active' },
    { id: 2, name: 'Алексей Смирнов', email: 'alexey@callcenter.com', role: 'Оператор', group: 'Группа продаж', status: 'active' },
    { id: 3, name: 'Петр Иванов', email: 'petr@callcenter.com', role: 'Супервизор', group: 'Группа поддержки', status: 'active' },
    { id: 4, name: 'Елена Козлова', email: 'elena@callcenter.com', role: 'Оператор', group: 'Группа продаж', status: 'inactive' },
    { id: 5, name: 'Дмитрий Попов', email: 'dmitry@callcenter.com', role: 'Менеджер', group: 'VIP группа', status: 'active' }
  ];

  const integrations = [
    { name: 'Asterisk PBX', status: 'connected', description: 'Основная телефонная система' },
    { name: 'CRM System', status: 'connected', description: 'Интеграция с клиентской базой' },
    { name: 'Email Service', status: 'disconnected', description: 'Уведомления по электронной почте' },
    { name: 'SMS Gateway', status: 'connected', description: 'Отправка SMS уведомлений' },
    { name: 'Analytics API', status: 'connected', description: 'Экспорт данных аналитики' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Информация профиля</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Имя</label>
                  <input
                    type="text"
                    defaultValue="Администратор"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Email</label>
                  <input
                    type="email"
                    defaultValue="admin@callcenter.com"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Роль</label>
                  <select className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}>
                    <option>Администратор</option>
                    <option>Менеджер</option>
                    <option>Супервизор</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Телефон</label>
                  <input
                    type="tel"
                    defaultValue="+7 (495) 123-45-67"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4`}>Смена пароля</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Текущий пароль</label>
                  <input
                    type="password"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${textSecondary} mb-2`}>Новый пароль</label>
                  <input
                    type="password"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputBg}`}
                  />
                </div>
              </div>
            </div>
            <button className={`px-6 py-2 text-white rounded-lg transition-all ${buttonBg}`}>
              Сохранить изменения
            </button>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-semibold ${textPrimary}`}>Управление пользователями</h3>
              <button className={`px-4 py-2 text-white rounded-lg transition-all ${buttonBg} text-sm`}>
                Добавить пользователя
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={isDark ? 'bg-slate-800/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'}>
                  <tr>
                    <th className={`px-4 py-3 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                      Пользователь
                    </th>
                    <th className={`px-4 py-3 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                      Роль
                    </th>
                    <th className={`px-4 py-3 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                      Группа
                    </th>
                    <th className={`px-4 py-3 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                      Статус
                    </th>
                    <th className={`px-4 py-3 text-left text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'} uppercase tracking-wider`}>
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className={`${isDark ? 'divide-y divide-slate-600' : 'divide-y-2 divide-gray-200'}`}>
                  {users.map((user) => (
                    <tr key={user.id} className={`${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div>
                          <div className={`font-medium ${textPrimary}`}>{user.name}</div>
                          <div className={`text-sm ${textSecondary}`}>{user.email}</div>
                        </div>
                      </td>
                      <td className={`px-4 py-4 whitespace-nowrap text-sm ${textPrimary}`}>
                        {user.role}
                      </td>
                      <td className={`px-4 py-4 whitespace-nowrap text-sm ${textSecondary}`}>
                        {user.group}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status === 'active' ? 'Активен' : 'Неактивен'}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">Изменить</button>
                        <button className="text-red-600 hover:text-red-800">Удалить</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <h3 className={`text-lg font-semibold ${textPrimary}`}>Интеграции</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className={`${cardBg} p-4 rounded-lg ${cardShadow}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${textPrimary}`}>{integration.name}</h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      integration.status === 'connected' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {integration.status === 'connected' ? 'Подключено' : 'Отключено'}
                    </span>
                  </div>
                  <p className={`text-sm ${textSecondary} mb-3`}>{integration.description}</p>
                  <button className={`text-sm px-3 py-1 rounded ${
                    integration.status === 'connected' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } transition-colors`}>
                    {integration.status === 'connected' ? 'Отключить' : 'Подключить'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className={`text-lg ${textSecondary}`}>Раздел находится в разработке</p>
          </div>
        );
    }
  };

  return (
    <div className={bgColor}>
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>Настройки</h1>
          <p className={textSecondary}>Управление профилем, пользователями и системными настройками</p>
        </div>

        <div className={`${cardBg} rounded-xl ${cardShadow}`}>
          {/* Вкладки */}
          <div className={`border-b ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id ? tabActive : tabInactive
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors`}
                >
                  <tab.icon className="text-sm" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Содержимое вкладки */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;