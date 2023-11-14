import "./dashboardleftnavbar.css"
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import CreateIcon from '@mui/icons-material/Create';
import QuizIcon from '@mui/icons-material/Quiz';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { path: '/dashboard/home', label: 'Home', icon: <HouseIcon /> },
    { path: '/dashboard/course', label: 'Courses', icon: <SchoolIcon /> },
    { path: '/dashboard/assignment', label: 'Assignments', icon: <CreateIcon /> },
    { path: '/dashboard/quiz', label: 'Quizzes', icon: <QuizIcon /> },
    { path: '/dashboard/unit-test', label: 'Unit Test', icon: <HistoryEduIcon /> },
    { path: '/dashboard/grades', label: 'Grades', icon: <CreditScoreIcon /> },
    { path: '/dashboard/progress', label: 'Progress', icon: <DonutLargeIcon /> },
    { path: '/dashboard/calendar', label: 'Calendar', icon: <CalendarMonthIcon /> },
    { path: '/dashboard/profile', label: 'Profile', icon: <AccountCircleIcon /> }
];

function DashboardLeftNavbar() {
    const [activeLink, setActiveLink] = useState('/dashboard'); // Set the default active link


    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="db-ln-outer">
            <div className="pages-row db-left-navbar">
                <div className="pages-col-12">
                    <h1 className="db-title-logo">LMS</h1>
                </div>
                <div className="pages-col-12">
                    {navLinks.map(({ path, label, icon }, index) => (
                        <nav
                            key={index}
                            className={`db-nav-links ${activeLink === path ? "active" : ""}`}
                            onClick={() => handleNavClick(path)}
                        >

                            <Link to={path}>{icon}{label}</Link>
                        </nav>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardLeftNavbar;
