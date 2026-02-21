import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, Check, X, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Attendance = () => {
    const { students, updateAttendance } = useAppContext();


    return (
        <div className="page-container">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Attendance Tracker</h1>
                    <p className="text-slate-500 mt-1">English 101 • December 23, 2025</p>
                </div>
                <div className="flex gap-3">
                    <button className="glass px-4 py-2 rounded-lg text-slate-600 flex items-center gap-2 hover:bg-slate-800/50 transition-colors">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>
                    {/* Save Attendance is now auto-save, but keeping button for UX */}
                    <button className="btn-primary" onClick={() => alert('Attendance saved!')}>
                        Save Attendance
                    </button>
                </div>
            </div>

            <div className="glass-card mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="bg-slate-50/50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-indigo-500/50 w-64"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-800/50 rounded-lg text-slate-500">
                            <Filter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 text-slate-500 text-sm">
                            <th className="py-4 px-4 font-medium">Student</th>
                            <th className="py-4 px-4 font-medium">Roll No</th>
                            <th className="py-4 px-4 font-medium">Overall %</th>
                            <th className="py-4 px-4 font-medium">Today's Status</th>
                            <th className="py-4 px-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b border-slate-200/50 hover:bg-slate-800/20 transition-colors group">
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-slate-900">
                                            {student.name.charAt(0)}
                                        </div>
                                        <span className="font-medium text-slate-900">{student.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-slate-500 font-mono text-sm">{student.roll}</td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${student.attendance >= 90 ? 'bg-green-500' :
                                                    student.attendance >= 75 ? 'bg-indigo-500' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${student.attendance}%` }}
                                            />
                                        </div>
                                        <span className="text-sm text-slate-500">{student.attendance}%</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <div className="flex bg-slate-50/50 rounded-lg p-1 w-fit border border-slate-200">
                                        <button
                                            onClick={() => updateAttendance(student.id, 'Present')}
                                            className={`p-1.5 rounded transition-all ${student.status === 'Present' ? 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/20 transform scale-105' : 'text-slate-500 hover:text-slate-600'}`}
                                            title="Mark Present"
                                        >
                                            <Check className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={() => updateAttendance(student.id, 'Absent')}
                                            className={`p-1.5 rounded transition-all ${student.status === 'Absent' ? 'bg-red-500 text-slate-900 shadow-lg shadow-red-500/20 transform scale-105' : 'text-slate-500 hover:text-slate-600'}`}
                                            title="Mark Absent"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={() => updateAttendance(student.id, 'Late')}
                                            className={`p-1.5 rounded transition-all ${student.status === 'Late' ? 'bg-orange-500 text-slate-900 shadow-lg shadow-orange-500/20 transform scale-105' : 'text-slate-500 hover:text-slate-600'}`}
                                            title="Mark Late"
                                        >
                                            <Clock className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <button className="p-2 hover:bg-slate-800/50 rounded-lg text-slate-500 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;
