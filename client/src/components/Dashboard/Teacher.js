


import "./dashboard.css";

import PieChart from "../Charts/PieChart";
import Notifications from "../Notifications/Notifications";

import studentsicon from "../../images/icons/students.png";
import subjectsicon from "../../images/icons/subjects.png";
import classicon from "../../images/icons/class.png";
import moneyicon from "../../images/icons/money.png";

function Teacher() {
  return (
    <div className="Teacher">
     
     <div className="stats">
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#d1f3e0" }}>
                        <img src={studentsicon} />
                    </div>
                    <div className="stat-num">
                        <p>Students</p>
                        <p>1500</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#e1f1ff" }}>
                        <img src={classicon} />

                    </div>
                    <div className="stat-num">
                        <p>Classes</p>
                        <p>3</p>
                    </div>
                </div>
                <div className="stat">
                <div className="stat-image" style={{ backgroundColor: "#f3e5f5" }}>
                        <img src={subjectsicon} />
                    </div>
                    <div className="stat-num">
                        <p>Subjects</p>
                        <p>2</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#ffeaea" }}>
                        <img src={moneyicon} />

                    </div>
                    <div className="stat-num">
                        <p>Earnings</p>
                        <p>75000</p>
                    </div>
                </div>
            </div>

                <div className="student-chart">
                    <h3>Students</h3>
                    <br />

                    <PieChart />
                </div>

            <Notifications/>


    </div>
  );
}

export default Teacher;
