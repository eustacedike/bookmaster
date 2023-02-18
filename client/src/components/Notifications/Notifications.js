
// import { Outlet } from "react-router-dom";


import "./Notifications.css";


function Notifications() {
    return (
        <div className="Notifications">

            <h3>Notice Board</h3>
            <br />

            <div className="notif">
                <p className="notif-time">16th Jan, 2023</p>
                <h4>Exams Next Week</h4>
                <p>Please, be notified about your exam next week</p> <br />
                <p className="">John Scarr</p> <br />
                <hr />
            </div>
            <div className="notif">
                <p className="notif-time">26th Feb, 2023</p>
                <h4>School Reopening</h4>
                <p>Resumption of school activities commences 2 weeks from now</p> <br />
                <p className="">John Scarr</p> <br />
                <hr />
            </div>
            <div className="notif">
                <p className="notif-time">16th Jan, 2023</p>
                <h4>Exams Next Week</h4>
                <p>Please, be notified about your exam next week</p> <br />
                <p className="">John Scarr</p> <br />
                <hr />
            </div>
        </div>
    );
}

export default Notifications;
