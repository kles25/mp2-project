import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboardhome/DashboardHome";
import DashboardCourse from "./pages/dashboardcourse/DashboardCourse";
import DashboardAssignment from "./pages/dashboardassignment/DashboardAssignment";
import DashboardQuiz from "./pages/dashboardquiz/DashboardQuiz";
import DashboardTest from "./pages/dashboardtest/DashboardTest";
import DashboardGrades from "./pages/dashboardgrades/DashboardGrades";
import DashboardProgress from "./pages/dashboardprogress/DashboardProgress";
import DashboardProfile from "./pages/dashboardprofile/DashboardProfile";
import DashboardCalendar from "./pages/dashboardcalendar/DashboardCalendar";
import AdminLogin from "./pages/adminlogin/AdminLogin";






function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard/home' element={<DashboardHome />} />
        <Route path='/dashboard/course' element={<DashboardCourse />} />
        <Route path='/dashboard/assignment' element={<DashboardAssignment />} />
        <Route path='/dashboard/quiz' element={<DashboardQuiz />} />
        <Route path='/dashboard/unit-test' element={<DashboardTest />} />
        <Route path='/dashboard/grades' element={<DashboardGrades />} />
        <Route path='/dashboard/progress' element={<DashboardProgress />} />
        <Route path='/dashboard/calendar' element={<DashboardCalendar />} />
        <Route path='/dashboard/profile' element={<DashboardProfile />} />
      </Route>
      <Route path='/admin' element={<AdminLogin />} />
    </Routes>
  );
}

export default App;