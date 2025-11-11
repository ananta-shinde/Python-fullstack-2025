import CategoryDropdown from "./category/categoryDropdown";

const Navbar = () => {
    return ( 
        <div className="container d-flex p-4">
            <CategoryDropdown/>
            <input className="form-control border" type="text" placeholder="search product here"/>
        </div>
     );
}
 
export default Navbar;