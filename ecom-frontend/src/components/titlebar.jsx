import { Link } from "react-router";

const Titlebar = () => {
    return ( 
        <div className="bg-light p-1 navbar navbar-expand-lg">
            <div className="container">
                <h2>ECOM</h2>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link">Wishlist</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link">Account</Link></li>
                    <li className="nav-item"> <Link className="nav-link">Cart</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Titlebar;