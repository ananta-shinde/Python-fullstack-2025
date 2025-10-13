import { use, useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";

function HomePage(){
    const[categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(res=>{
            setCategories(res)
        });
    },[])
    return(
        <div className="container">
         <div className="row">
            <div className="col">
                    <h1 className="text-center">Welcome to MyShop</h1>
                    <CategoryBar categorylist={categories}/>
            </div>
         </div>
        </div>
    )
}

export default HomePage;