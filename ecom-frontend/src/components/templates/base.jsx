import { Children } from "react";
import Footer from "../footer";
import Titlebar from "../titlebar";
import { Outlet } from "react-router";

const BaseTemplate = (props) => {
    return ( <>
      <Titlebar/>
        <Outlet/>
      <Footer/>
    </> );
}
 
export default BaseTemplate;