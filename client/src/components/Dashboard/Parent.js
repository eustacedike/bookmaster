


import "./dashboard.css";


import Notifications from "../Notifications/Notifications";


import studentsicon from "../../images/icons/students.png";
import parentsicon from "../../images/icons/parents.png";
import teachersicon from "../../images/icons/teachers.png";
import moneyicon from "../../images/icons/money.png";

function Parent() {
  return (
    <div className="Parent">
     
     <div className="stats">
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#d1f3e0" }}>
                        <img src={studentsicon} />
                    </div>
                    <div className="stat-num">
                        <p>Kids</p>
                        <p>3</p>
                    </div>
                </div>
                {/* <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#e1f1ff" }}>
                        <img src={teachersicon} />

                    </div>
                    <div className="stat-num">
                        <p>Teachers</p>
                        <p>15000</p>
                    </div>
                </div> */}
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
                        <p>Fees</p>
                        <p>1200</p>
                    </div>
                </div>
            </div>

            <Notifications/>


    </div>
  );
}

export default Parent;
