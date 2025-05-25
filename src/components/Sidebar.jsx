import React from 'react';
import '../styles/Sidebar.css';
import { navLinks } from '../data/navLinks';
import { 
  FiHome, 
  FiClock, 
  FiCalendar, 
  FiClipboard, 
  FiBarChart2, 
  FiActivity, 
  FiMessageSquare, 
  FiHelpCircle, 
  FiSettings 
} from 'react-icons/fi';

const iconComponents = {
  FiHome: FiHome,
  FiClock: FiClock,
  FiCalendar: FiCalendar,
  FiClipboard: FiClipboard,
  FiBarChart2: FiBarChart2,
  FiActivity: FiActivity,
  FiMessageSquare: FiMessageSquare,
  FiHelpCircle: FiHelpCircle,
  FiSettings: FiSettings
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">General</h3>
        <ul className="nav-links">
          {navLinks.map((link, index) => {
            const Icon = iconComponents[link.icon];
            return (
              <li key={index} className="nav-item">
                <Icon className="nav-icon" />
                <span>{link.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;