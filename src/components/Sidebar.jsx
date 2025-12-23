import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, CheckSquare, FolderOpen, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/attendance', label: 'Attendance', icon: Users },
    { path: '/tasks', label: 'Tasks', icon: CheckSquare },
    { path: '/materials', label: 'Materials', icon: FolderOpen },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-[rgba(255,255,255,0.05)] flex flex-col pt-6 z-20">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg shadow-indigo-500/20">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          EduFlow
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-indigo-500/10 text-indigo-400 font-medium shadow-[0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`
            }
          >
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
          <div className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Current Class</div>
          <div className="font-semibold text-slate-200">English 101</div>
          <div className="text-xs text-slate-400 mt-1">Next: Grammar Review</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
