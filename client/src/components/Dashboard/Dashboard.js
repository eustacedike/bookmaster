
import { Outlet, useOutletContext } from "react-router-dom";


import Admin from "./Admin";
import Student from "./Student";
import Teacher from "./Teacher";
import Parent from "./Parent";



function Dashboard(props) {

const [dashContent] = useOutletContext();

  return (
    <div className="Dashboard">
      {/* <h1>{dashContent}</h1> */}
      {/* <Admin/> */}
      

      {/* <Student/> */}
      
      {/* <Teacher /> */}
      <Parent />
      
    </div>
  );
}

export default Dashboard;
