
const Navbar = () => {
    return ( 
        <div className="container d-flex p-4">
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Categories
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <input className="form-control border" type="text" placeholder="search product here"/>
        </div>
     );
}
 
export default Navbar;