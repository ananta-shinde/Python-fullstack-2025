import { Children } from "react";
import Footer from "../footer";
import Titlebar from "../titlebar";
import { Outlet } from "react-router";

const BaseTemplate = (props) => {
    return ( <>
      <Titlebar/>
      <div style={{minHeight:"80vh"}}>
          <Outlet/>
      </div>
        
      <Footer/>
    </> );
}
 
export default BaseTemplate;