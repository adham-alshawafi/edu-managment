import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Initial Data
    const initialStudents = [
        { id: 1, name: "Alice Johnson", roll: "101", status: "Present", attendance: 92 },
        { id: 2, name: "Bob Smith", roll: "102", status: "Absent", attendance: 85 },
        { id: 3, name: "Charlie Brown", roll: "103", status: "Late", attendance: 78 },
        { id: 4, name: "Diana Prince", roll: "104", status: "Present", attendance: 96 },
        { id: 5, name: "Evan Wright", roll: "105", status: "Present", attendance: 88 },
    ];

    const initialTasks = [
        { id: 1, title: 'Grade English 101 Midterms', due: 'Today, 5:00 PM', priority: 'High', status: 'Pending', tag: 'Grading' },
        { id: 2, title: 'Prepare Lecture Slides for Grammar', due: 'Tomorrow, 9:00 AM', priority: 'Medium', status: 'In Progress', tag: 'Prep' },
        { id: 3, title: 'Submit Monthly Attendance Report', due: 'Dec 25, 2025', priority: 'Low', status: 'Pending', tag: 'Admin' },
        { id: 4, title: 'Review Student Essay Drafts', due: 'Dec 26, 2025', priority: 'Medium', status: 'Completed', tag: 'Grading' },
    ];

    // State Initialization
    const [students, setStudents] = useState(() => {
        const saved = localStorage.getItem('edu-app-students');
        return saved ? JSON.parse(saved) : initialStudents;
    });

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('edu-app-tasks');
        return saved ? JSON.parse(saved) : initialTasks;
    });

    // Persistence
    useEffect(() => {
        localStorage.setItem('edu-app-students', JSON.stringify(students));
    }, [students]);

    useEffect(() => {
        localStorage.setItem('edu-app-tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Actions
    const updateAttendance = (id, newStatus) => {
        setStudents(prev => prev.map(student =>
            student.id === id ? { ...student, status: newStatus } : student
        ));
    };

    const toggleTaskStatus = (id) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' } : task
        ));
    };

    const addTask = (newTask) => {
        setTasks(prev => [...prev, { ...newTask, id: Date.now() }]);
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return (
        <AppContext.Provider value={{
            students,
            tasks,
            updateAttendance,
            toggleTaskStatus,
            addTask,
            deleteTask
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
