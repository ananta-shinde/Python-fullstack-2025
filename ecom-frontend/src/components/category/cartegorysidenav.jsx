import data from "../../data/data.json"
const CategorySideNav = () => {
    return ( 
        <ul class="list-group">
            {data.categories.map(c=>(<li class="list-group-item">{c.name}</li>))} 
        </ul>
     );
}
 
export default CategorySideNav;