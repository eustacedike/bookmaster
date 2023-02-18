
import "./dashboard.css";

import dp from '../../images/dp/fireboy.png';

import subjectsicon from "../../images/icons/subjects.png";
import teachersicon from "../../images/icons/teachers.png";
import reporticon from "../../images/icons/report.png";


import Notifications from "../Notifications/Notifications";

function Student() {
  return (
    <div className="Student">
 <h2>STUDENT DASHBOARD</h2>
<div className="stats">
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#f3e5f5" }}>
                        <img src={subjectsicon} />
                    </div>
                    <div className="stat-num">
                        <p>Subjects</p>
                        <p>10</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#e1f1ff" }}>
                        <img src={teachersicon} />

                    </div>
                    <div className="stat-num">
                        <p>Teachers</p>
                        <p>4</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#fff2d8" }}>
                        <img src={reporticon} />

                    </div>
                    <div className="stat-num">
                        <p>Attendance</p>
                        <p>95%</p>
                    </div>
                </div>
                {/* <div className="stat">
                    <div className="stat-image" style={{ backgroundColor: "#ffeaea" }}>
                        <img src={moneyicon} />

                    </div>
                    <div className="stat-num">
                        <p>Earnings</p>
                        <p>15000</p>
                    </div>
                </div> */}
            </div>

      <div className="about-you">
        <div className="about-you-head">

          <img src={dp}></img>
          <div>
            <h2>Eustace Dike</h2>
            <p>I am a class one student of booksea international</p>
          </div>
        </div>
        <div className="about-you-main">

          <table>
            <tr>
              <td>Name:</td>
              <th>Eustace Dike</th>
            </tr>
            <tr>
              <td>Gender:</td>
              <th>Male</th>
            </tr>
            <tr>
              <td>Father's Name:</td>
              <th>Eustace Sr. Dike</th>
            </tr>
            <tr>
              <td>Mother's Name:</td>
              <th>Martha Dike</th>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <th>02.09.1998</th>
            </tr>
            <tr>
              <td>Country of Origin:</td>
              <th>Nigeria</th>
            </tr>
            <tr>
              <td>Phone:</td>
              <th>+234 7037230631</th>
            </tr>
            <tr>
              <td>Religion:</td>
              <th>Christianity</th>
            </tr>
            <tr>
              <td>Father's Occupation:</td>
              <th>Business Developer</th>
            </tr>
            <tr>
              <td>Email:</td>
              <th>eustacedyke@gmail.com</th>
            </tr>
            <tr>
              <td>Addmission Date:</td>
              <th>15.02.2023</th>
            </tr>
            <tr>
              <td>Class:</td>
              <th>Grade 5</th>
            </tr>
            <tr>
              <td>Section:</td>
              <th>Gryffindor</th>
            </tr>
            <tr>
              <td>School ID:</td>
              <th>10145</th>
            </tr>
            <tr>
              <td>Address:</td>
              <th>14 EDMAC Close, Port Harcourt</th>
            </tr>
          </table>
        </div>
      </div>


      <Notifications/>

    </div>
  );
}

export default Student;
