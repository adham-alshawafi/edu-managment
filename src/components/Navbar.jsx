import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, CheckSquare, FolderOpen, BookOpen } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/calendar', label: 'Calendar', icon: Calendar },
        { path: '/attendance', label: 'Attendance', icon: Users },
        { path: '/tasks', label: 'Tasks', icon: CheckSquare },
        { path: '/materials', label: 'Materials', icon: FolderOpen },
    ];

    return (
        <nav className="sticky top-0 w-full glass border-b border-white/20 z-50 px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg shadow-indigo-500/20">
                    <BookOpen className="w-6 h-6 text-slate-900" />
                </div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hidden sm:block">
                    EduFlow
                </h1>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-1 md:gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-indigo-500/10 text-indigo-400 font-medium shadow-[0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="hidden md:block text-sm">{item.label}</span>
                    </NavLink>
                ))}
            </div>

            {/* Current Class Widget (Mini) */}
            <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-slate-200">
                <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider text-right">Current Class</div>
                    <div className="font-semibold text-slate-900 text-sm">English 101</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
