
import "./dashboard.css";

import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import EventCalendar from "../Charts/EventCalendar";
import Notifications from "../Notifications/Notifications";



import studentsicon from "../../images/icons/students.png";
import parentsicon from "../../images/icons/parents.png";
import teachersicon from "../../images/icons/teachers.png";
import moneyicon from "../../images/icons/money.png";


function Admin() {
    return (
        <div className="Admin">
            <h2>ADMIN DASHBOARD</h2>

            <div className="stats">
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#d1f3e0" }}>
                        <img src={studentsicon} />
                    </div>
                    <div className="stat-num">
                        <p>Students</p>
                        <p>15000</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#e1f1ff" }}>
                        <img src={teachersicon} />

                    </div>
                    <div className="stat-num">
                        <p>Teachers</p>
                        <p>15000</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#fff2d8" }}>
                        <img src={parentsicon} />

                    </div>
                    <div className="stat-num">
                        <p>Parents</p>
                        <p>15000</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#ffeaea" }}>
                        <img src={moneyicon} />

                    </div>
                    <div className="stat-num">
                        <p>Earnings</p>
                        <p>15000</p>
                    </div>
                </div>
            </div>

            <div className="money-charts">
                <div className="earn-chart">
                    <h3>Earnings</h3>
                    <br />

                    <LineChart />
                </div>
                <div className="expense-chart">
                    <h3>Expenses</h3>
                    <br />

                    <BarChart />
                </div>
            </div>
            <div className="other-charts">
                <div className="student-chart">
                    <h3>Students</h3>
                    <br />

                    <PieChart />
                </div>
                <div className="event-calendar">
                    <h3>Event Calendar</h3>
                    <br />

                    <EventCalendar />
                </div>
            </div>

            <Notifications/>
            
        </div>
    );
}

export default Admin;
