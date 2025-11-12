import { useRef } from "react";
import data from "../../data/data.json"

const CategoryMegaMenu = () => {

    const categoryContainer = useRef(null);
    const subCategoryContainer = useRef(null);
    const handleCategoryBtnClick = (event)=>{
            if(categoryContainer.current.className == "d-none"){
            categoryContainer.current.className = "d-block"
            }else{
                categoryContainer.current.className = "d-none"
            }
    }

    const handleCategoryClick = ()=>{
        subCategoryContainer.current.className.replace("d-none","d-block")
    }

    return ( 
        <div className="position-relative">
            <button onMouseEnter={handleCategoryBtnClick} >Categories</button>
            <div onMouseLeave={handleCategoryBtnClick} ref={categoryContainer} className="d-none" style={{position:"absolute",zIndex:3,width:"70%"}}>
               <div className="row">
                    <div className="col-6">
                         <ul className="list-group">
                            {data.categories.map(c=>( <li className="list-group-item" onMouseOver={handleCategoryClick}><a>{c.name}</a></li>))}
                        </ul>
                    </div>
                    <div ref={subCategoryContainer} className="col d-none">
                        <ul className="list-group">
                            {data.categories.map(c=>( <li className="list-group-item"><a>{c.name}</a></li>))}
                        </ul>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default CategoryMegaMenu;