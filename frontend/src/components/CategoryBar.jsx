import { Link } from "react-router";

const Categoryitem = (props)=>{
    return(
        <li className="nav-item card col-2 text-center me-2">
        <Link to={"/products?category="+props.title} className="nav-link text-dark">{props.title}</Link>
    </li>
    )
}

const CategoryBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg">
            <ul id="category-list" className="navbar-nav text-decoration-none overflow-scroll ">
              {props.categorylist.map(c=><Categoryitem title={c}/>)}
            </ul>
        </nav>
     );
}
 
export default CategoryBar;