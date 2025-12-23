import React, { useState } from 'react';
import {
    CheckSquare, Plus, Calendar, Clock, MoreVertical,
    AlertCircle, CheckCircle2, Circle
} from 'lucide-react';

const Tasks = () => {
    const [filter, setFilter] = useState('all');

    const tasks = [
        { id: 1, title: 'Grade English 101 Midterms', due: 'Today, 5:00 PM', priority: 'High', status: 'Pending', tag: 'Grading' },
        { id: 2, title: 'Prepare Lecture Slides for Grammar', due: 'Tomorrow, 9:00 AM', priority: 'Medium', status: 'In Progress', tag: 'Prep' },
        { id: 3, title: 'Submit Monthly Attendance Report', due: 'Dec 25, 2025', priority: 'Low', status: 'Pending', tag: 'Admin' },
        { id: 4, title: 'Review Student Essay Drafts', due: 'Dec 26, 2025', priority: 'Medium', status: 'Completed', tag: 'Grading' },
    ];

    return (
        <div className="page-container">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-100">Tasks</h1>
                    <p className="text-slate-400 mt-1">Stay organized and track your progress</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Task
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Task List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex gap-4 mb-6 text-sm border-b border-slate-700/50 pb-2">
                        {['all', 'pending', 'completed'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`pb-2 capitalize ${filter === f
                                        ? 'text-indigo-400 border-b-2 border-indigo-400 font-medium'
                                        : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {tasks.map((task) => (
                        <div key={task.id} className="glass-card hover:bg-[rgba(30,41,59,0.6)] group transition-all p-5 flex items-start gap-4">
                            <button className={`mt-1 p-0.5 rounded-full border ${task.status === 'Completed'
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'border-slate-500 text-transparent hover:border-indigo-400'
                                }`}>
                                <CheckCircle2 className="w-4 h-4" />
                            </button>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className={`font-semibold text-lg ${task.status === 'Completed' ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                                        {task.title}
                                    </h3>
                                    <button className="text-slate-500 hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {task.due}
                                    </div>
                                    <div className={`px-2 py-0.5 rounded text-xs font-medium ${task.priority === 'High' ? 'bg-red-500/10 text-red-400' :
                                            task.priority === 'Medium' ? 'bg-orange-500/10 text-orange-400' :
                                                'bg-blue-500/10 text-blue-400'
                                        }`}>
                                        {task.priority}
                                    </div>
                                    <div className="px-2 py-0.5 rounded text-xs font-medium bg-slate-700/50 text-slate-400">
                                        {task.tag}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Summary */}
                <div className="space-y-6">
                    <div className="glass-card bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                        <h3 className="text-lg font-bold text-white mb-4">Productivity</h3>
                        <div className="flex items-center justify-center py-4">
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90">
                                    <circle cx="64" cy="64" r="56" className="stroke-slate-700" strokeWidth="8" fill="none" />
                                    <circle cx="64" cy="64" r="56" className="stroke-indigo-500" strokeWidth="8" fill="none" strokeDasharray="351.8" strokeDashoffset="87.95" strokeLinecap="round" />
                                </svg>
                                <div className="absolute text-center">
                                    <span className="text-2xl font-bold text-white">75%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-slate-400 text-sm">3 of 4 tasks completed</p>
                    </div>

                    <div className="glass-card">
                        <h3 className="text-lg font-bold text-slate-200 mb-4">Pending High Priority</h3>
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3">
                            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-red-200">Grade English 101 Midterms</p>
                                <p className="text-xs text-red-300 mt-1">Due Today, 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
