
import { Outlet } from "react-router-dom";
import DashboardLeftNavbar from "../../components/dashboardleftnav/DashboardLeftNavbar";
import DashboardTopbar from "../../components/dashboardtopbar/DashboardTopbar";
import "./dashboard.css"
import HistoryNavbar from "../../components/historynavbar/HistoryNavbar";
import UpcomingEvents from "../../components/upcomingevents/UpcomingEvents";


function Dashboard() {
    return (
        <>
            <div className='background-image-color'>
                <div className="background-gradient">
                    <div className="home-container-fluid">
                        <div className="pages-row">
                            <div className="pages-col-2">
                                <DashboardLeftNavbar></DashboardLeftNavbar>
                            </div>
                            <div className="pages-col-10">
                                <div className="pages-row">
                                    <div className="pages-col-12">
                                        <DashboardTopbar></DashboardTopbar>
                                    </div>
                                    <div className="pages-col-12">
                                        <div className="pages-row">
                                            <div className="pages-col-9 db-section-holder">
                                                <div className="db-section-content">
                                                    <Outlet />
                                                </div>
                                            </div>
                                            <div className="pages-col-3">
                                                <div className="hn-holder">
                                                    <HistoryNavbar />
                                                    <UpcomingEvents />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
