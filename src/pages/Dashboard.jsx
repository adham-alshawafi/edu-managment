import React from 'react';
import {
    Users, BookOpen, Clock, Calendar as CalendarIcon,
    TrendingUp, AlertCircle, CheckCircle2
} from 'lucide-react';

import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
    const { students, tasks } = useAppContext();

    const totalStudents = students.length;
    const avgAttendance = Math.round(students.reduce((acc, curr) => acc + curr.attendance, 0) / totalStudents) || 0;
    const pendingTasks = tasks.filter(t => t.status === 'Pending' || t.status === 'In Progress').length;

    const stats = [
        { label: 'Total Students', value: totalStudents.toString(), icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { label: 'Avg. Attendance', value: `${avgAttendance}%`, icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10' },
        { label: 'Upcoming Tasks', value: pendingTasks.toString(), icon: CheckCircle2, color: 'text-purple-400', bg: 'bg-purple-500/10' },
        { label: 'Next Class', value: '10:00 AM', icon: Clock, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    ];

    return (
        <div className="page-container space-y-8">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Welcome back, Professor
                    </h1>
                    <p className="text-slate-500 mt-2">Here's what's happening in your classroom today.</p>
                </div>
                <div className="glass px-4 py-2 rounded-lg text-sm text-slate-600 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>December 23, 2025</span>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="glass-card hover:bg-white/60 group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity / Schedule */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-indigo-400" />
                            Today's Schedule
                        </h2>
                        <div className="space-y-4">
                            {[
                                { time: '09:00 AM', subject: 'English Literature', topic: 'Shakespeare Introduction', status: 'Completed' },
                                { time: '11:00 AM', subject: 'Grammar 101', topic: 'Advanced Verbs', status: 'In Progress' },
                                { time: '02:00 PM', subject: 'Creative Writing', topic: 'Short Story Workshop', status: 'Upcoming' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-4 rounded-xl bg-white/40 border border-slate-200/50 hover:border-indigo-300 transition-colors">
                                    <div className="w-24 font-mono text-slate-500 text-sm">{item.time}</div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900">{item.subject}</h4>
                                        <p className="text-sm text-slate-500">{item.topic}</p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                                        item.status === 'In Progress' ? 'bg-indigo-500/10 text-indigo-400' :
                                            'bg-slate-500/10 text-slate-500'
                                        }`}>
                                        {item.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Recent Materials */}
                <div className="space-y-6">
                    <div className="glass-card">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-indigo-400" />
                            Needs Attention
                        </h2>
                        <div className="space-y-4">
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                <p className="text-sm text-red-700">Attendance missing for <strong>English 101</strong> (Yesterday)</p>
                                <button className="mt-2 text-xs font-semibold text-red-600 hover:text-red-500">Resolve</button>
                            </div>
                            <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                <p className="text-sm text-orange-700">3 students flagged for low participation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
