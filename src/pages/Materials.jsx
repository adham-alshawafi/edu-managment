import React from 'react';
import {
    FolderOpen, FileText, Image, Film, MoreVertical,
    Download, Search, UploadCloud, Grid, List
} from 'lucide-react';

const Materials = () => {
    const materials = [
        { id: 1, name: 'Syllabus_2025.pdf', type: 'pdf', size: '2.4 MB', date: 'Dec 10, 2025', icon: FileText, color: 'text-red-400', bg: 'bg-red-500/10' },
        { id: 2, name: 'Lecture_1_Intro.pptx', type: 'ppt', size: '5.1 MB', date: 'Dec 12, 2025', icon: FileText, color: 'text-orange-400', bg: 'bg-orange-500/10' },
        { id: 3, name: 'Class_Photo.jpg', type: 'image', size: '3.8 MB', date: 'Dec 15, 2025', icon: Image, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { id: 4, name: 'Hamlet_Analysis.docx', type: 'doc', size: '1.2 MB', date: 'Dec 18, 2025', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { id: 5, name: 'Grammar_Workshop.mp4', type: 'video', size: '154 MB', date: 'Dec 20, 2025', icon: Film, color: 'text-purple-400', bg: 'bg-purple-500/10' },
        { id: 6, name: 'Shakespeare_Bio.pdf', type: 'pdf', size: '1.8 MB', date: 'Dec 22, 2025', icon: FileText, color: 'text-red-400', bg: 'bg-red-500/10' },
    ];

    return (
        <div className="page-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-100">Course Materials</h1>
                    <p className="text-slate-400 mt-1"> English 101 Resources & Documents</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50"
                        />
                    </div>
                    <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                        <UploadCloud className="w-4 h-4" />
                        <span className="hidden sm:inline">Upload</span>
                    </button>
                </div>
            </div>

            {/* Folders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Textbooks', 'Assignments', 'Lectures', 'Archives'].map((folder) => (
                    <div key={folder} className="glass-card hover:bg-[rgba(30,41,59,0.6)] p-4 flex items-center gap-3 cursor-pointer group">
                        <FolderOpen className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="font-semibold text-slate-200">{folder}</h4>
                            <p className="text-xs text-slate-500">12 files</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Files */}
            <div className="glass-card">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-200">Recent Uploads</h3>
                    <div className="flex bg-slate-800/50 rounded-lg p-1">
                        <button className="p-1.5 rounded bg-slate-700 text-white"><Grid className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded text-slate-400 hover:text-white"><List className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.map((file) => (
                        <div key={file.id} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all group relative">
                            <div className="flex justify-between items-start mb-3">
                                <div className={`p-3 rounded-lg ${file.bg} ${file.color}`}>
                                    <file.icon className="w-6 h-6" />
                                </div>
                                <button className="text-slate-500 hover:text-slate-300">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>

                            <h4 className="font-medium text-slate-200 truncate mb-1" title={file.name}>{file.name}</h4>
                            <div className="flex justify-between items-center text-xs text-slate-500">
                                <span>{file.size} • {file.date}</span>
                            </div>

                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-slate-900 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Materials;
