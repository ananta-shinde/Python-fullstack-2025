import { Children } from "react";
import Footer from "../footer";
import Titlebar from "../titlebar";
import { Outlet } from "react-router";
import CategorySideNav from "../category/cartegorysidenav";

const BaseTemplate = (props) => {
     console.log("base template loaded")
    return ( <>
      <Titlebar/>
      <div style={{minHeight:"80vh"}}>
      <div className="container">
            <div className="row">
                <div className="col-2">
                    <CategorySideNav/>
                </div>
                <div className="col-9">
                     <Outlet/>
                </div>
            </div>
        </div>
          
      </div>
        
      <Footer/>
    </> );
}
 
export default BaseTemplate;