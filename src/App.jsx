import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/CalendarPage';

import Attendance from './pages/Attendance';

import Tasks from './pages/Tasks';
import Materials from './pages/Materials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="materials" element={<Materials />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
