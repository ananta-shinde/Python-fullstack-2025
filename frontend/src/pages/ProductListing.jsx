import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';
// import products from '../database/product.json'


function ProductListingPage(){
    const[products,setproducts] = useState([])
    const [searchparams] = useSearchParams();

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/'+searchparams.get("category"))
        .then(res => res.json())
        .then(res=>{
            setproducts(res.products)
        });
    },[])
    return(
        <div className="container">
            <div className="row">
                {products.map(p=>(<ProductCard product={p}/>))}
            </div>
        </div>
    )
}

export default ProductListingPage;