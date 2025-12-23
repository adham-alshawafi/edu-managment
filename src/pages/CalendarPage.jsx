import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Search, Plus } from 'lucide-react';
import {
    format, addMonths, subMonths, startOfMonth, endOfMonth,
    startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth,
    isSameDay, addDays, isToday
} from 'date-fns';

const CalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock Data
    const events = [
        { id: 1, title: 'English 101', date: new Date(), time: '09:00 AM', type: 'class' },
        { id: 2, title: 'Staff Meeting', date: addDays(new Date(), 2), time: '02:00 PM', type: 'meeting' },
        { id: 3, title: 'Exam Prep', date: addDays(new Date(), 5), time: '11:00 AM', type: 'event' },
    ];

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToToday = () => setCurrentDate(new Date());

    const renderHeader = () => {
        return (
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-100">Schedule</h1>
                    <p className="text-slate-400 mt-1">Manage your classes and events</p>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50">
                    <button onClick={prevMonth} className="p-2 hover:bg-slate-700/50 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="px-4 font-semibold text-slate-200 min-w-[140px] text-center">
                        {format(currentDate, 'MMMM yyyy')}
                    </div>
                    <button onClick={nextMonth} className="p-2 hover:bg-slate-700/50 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="w-[1px] h-6 bg-slate-700 mx-1"></div>
                    <button onClick={goToToday} className="px-3 py-1.5 text-sm font-medium text-indigo-300 hover:bg-indigo-500/10 rounded-lg transition-colors">
                        Today
                    </button>
                </div>
            </header>
        );
    };

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="grid grid-cols-7 mb-2 border-b border-slate-700/30 pb-2">
                {days.map(day => (
                    <div key={day} className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider">
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        const dateRange = eachDayOfInterval({ start: startDate, end: endDate });

        return (
            <div className="grid grid-cols-7 gap-px bg-slate-700/30 rounded-2xl overflow-hidden border border-slate-700/30">
                {dateRange.map((dt, i) => {
                    const isCurrentMonth = isSameMonth(dt, monthStart);
                    const isSelected = isSameDay(dt, new Date()); // Just using 'today' as 'selected' for now

                    // Find events for this day
                    const dayEvents = events.filter(e => isSameDay(e.date, dt));

                    return (
                        <div
                            key={dt.toString()}
                            className={`min-h-[120px] p-2 bg-slate-900/40 relative group transition-colors hover:bg-slate-800/40 ${!isCurrentMonth ? 'bg-slate-900/80 text-slate-600' : 'text-slate-300'
                                }`}
                        >
                            <div className={`flex justify-between items-start mb-2`}>
                                <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium ${isToday(dt)
                                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                                        : 'text-slate-400'
                                    }`}>
                                    {format(dt, dateFormat)}
                                </span>
                                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-700 rounded transition-opacity">
                                    <Plus className="w-3 h-3 text-slate-400" />
                                </button>
                            </div>

                            <div className="space-y-1">
                                {dayEvents.map((ev, idx) => (
                                    <div key={idx} className={`text-xs p-1.5 rounded border border-transparent truncate cursor-pointer hover:scale-[1.02] transition-transform ${ev.type === 'class' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/20' :
                                            ev.type === 'meeting' ? 'bg-purple-500/20 text-purple-300 border-purple-500/20' :
                                                'bg-slate-700/50 text-slate-400'
                                        }`}>
                                        {ev.time} - {ev.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="page-container h-screen flex flex-col">
            {renderHeader()}
            <div className="glass-card flex-1 p-6 flex flex-col overflow-hidden">
                {renderDays()}
                <div className="flex-1 overflow-y-auto">
                    {renderCells()}
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
