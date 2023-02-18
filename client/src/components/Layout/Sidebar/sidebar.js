
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaGraduationCap, FaCaretRight, FaUsers, FaCalculator, FaChalkboardTeacher, FaBook, FaTasks, FaUserPlus, FaSchool, FaUserGraduate, } from 'react-icons/fa';
import { GoDashboard } from 'react-icons/go';
import { HiUsers } from 'react-icons/hi';
import { TiMessages } from 'react-icons/ti';

import '../layout.css';



function SideBar(props) {


  const [openMobile, setOpenMobile] = useState(false)
  const openMenu = () => { setOpenMobile(value => !value) }


  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "unset"
  // }


  return (
    <div className={openMobile ? "SideBar mobbed" : "SideBar"}>
      {/* <div>
        <button onClick={()=>{props.setDashContent(1)}}>1</button>
        <button onClick={()=>{props.setDashContent(2)}}>2</button>
        <button onClick={()=>{props.setDashContent(3)}}>3</button>
        <button onClick={()=>{props.setCorn(4)}}>4</button>
      </div> */}
      <div className='side-head'>

        <div className={openMobile ? "side-menu change" : "side-menu"} onClick={openMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <h1><FaGraduationCap /></h1>
        <h3>BookMaster</h3>
      </div>
      <div className="side-main">
        <div className="side-option">
          <Link className="side-link" to="/">
            <span className="side-icon"><GoDashboard /> </span>
            <p>Dashboard</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaUserGraduate /> </span>
            <p> Students</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaUsers /> </span>
            <p>Teachers</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><HiUsers /> </span>
            <p> Parents</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaChalkboardTeacher /> </span>
            <p> Classes</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaBook /> </span>
            <p>Subjects</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaTasks /> </span>
            <p>Exams</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>

        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaSchool /> </span>
            <p>Houses</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>

        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><TiMessages /> </span>
            <p>Messages</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaUserPlus /> </span>
            <p>Add Account</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>
        <div className="side-option">
          <Link className="side-link" to="/">

            <span className="side-icon"><FaCalculator /> </span>
            <p>Accounting</p>
          </Link>
          <p><FaCaretRight /></p>
        </div>


      </div>

    </div>
  );
}

export default SideBar;
