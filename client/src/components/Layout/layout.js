
import ReactDOM from "react-dom/client";
import { Outlet} from "react-router-dom";
import { useState } from "react";


import Navigation from "./Header/Navigation";
import SideBar from "./Sidebar/sidebar";

import "./layout.css";

function Layout() {

const [dashContent, setDashContent] = useState(0);

  

  return (
    <div className="Layout">
      {/* <div>
        <button onClick={()=>{setCorn(1)}}>1</button>
        <button onClick={()=>{setCorn(2)}}>2</button>
        <button onClick={()=>{setCorn(3)}}>3</button>
        <button onClick={()=>{setCorn(4)}}>4</button>
      </div> */}
      

      <SideBar
      dashContent={dashContent}
      setDashContent={setDashContent}
      />
      <div className="outlet">
      <Navigation/>
      <Outlet 
      context={[dashContent]}
      />
      </div>
    </div>
  );
}

export default Layout;
