import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaChartLine, 
  FaTachometerAlt, 
  FaUsers, 
  FaList, 
  FaPhoneSlash, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme();

  const sidebarBg = isDark 
    ? 'bg-slate-800 border-r border-slate-700' 
    : 'bg-white border-r-2 border-gray-200';

  const logoIconBg = isDark
    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
    : 'bg-gradient-to-br from-blue-500 to-purple-600';

  const logoTextColor = isDark
    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent';

  const navLinkActive = isDark
    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 border-r-4 border-blue-400 mx-2 rounded-lg'
    : 'text-white bg-gradient-to-r from-blue-600 to-purple-600 border-r-4 border-blue-400 mx-2 rounded-lg';

  const navLinkInactive = isDark
    ? 'text-slate-300 hover:text-white hover:bg-slate-700 transition-all mx-2 rounded-lg mt-1'
    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all mx-2 rounded-lg mt-1';

  const borderColor = isDark ? 'border-slate-700' : 'border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-gray-500';
  const buttonBg = isDark ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-gray-200 hover:bg-gray-300 border-gray-300';

  const menuItems = [
    { to: '/', icon: FaTachometerAlt, label: 'Дашборд' },
    { to: '/operators', icon: FaUsers, label: 'Отчеты по операторам' },
    { to: '/queues', icon: FaList, label: 'Отчеты по очередям' },
    { to: '/missed-calls', icon: FaPhoneSlash, label: 'Пропущенные звонки' },
    { to: '/analytics', icon: FaChartBar, label: 'Аналитика' },
    { to: '/settings', icon: FaCog, label: 'Настройки' },
  ];

  return (
    <aside className={`h-screen w-64 ${sidebarBg} flex flex-col shadow-2xl fixed left-0 top-0 z-20`}>
      <div className={`flex items-center gap-3 px-6 py-6 border-b ${borderColor}`}>
        <div className={`w-10 h-10 ${logoIconBg} rounded-xl flex items-center justify-center ${isDark ? 'shadow-lg' : 'shadow-lg'}`}>
          <FaChartLine className="text-xl text-white" />
        </div>
        <span className={`text-xl font-bold ${logoTextColor}`}>Smart Колл</span>
      </div>
      
      <nav className="flex-1 mt-6">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            <item.icon className="w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className={`mt-auto px-6 py-6 border-t ${borderColor}`}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`w-full ${buttonBg} ${textPrimary} px-4 py-2 rounded-lg transition-colors border mb-4 flex items-center justify-center gap-2`}
        >
          {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-600" />}
          <span>{isDark ? 'Светлая тема' : 'Темная тема'}</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full ${logoIconBg} flex items-center justify-center text-lg font-bold text-white`}>
            А
          </div>
          <div>
            <div className={`font-semibold ${textPrimary}`}>Администратор</div>
            <div className={`text-sm ${textSecondary}`}>admin@callcenter.com</div>
          </div>
        </div>
        <button className={`w-full ${buttonBg} ${textPrimary} px-4 py-2 rounded-lg transition-colors border`}>
          <FaSignOutAlt className="mr-2" />
          Выйти
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;