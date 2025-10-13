import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
// import products from '../database/product.json'
const ProductDetail = () => {
               const[searchparams] =useSearchParams();
            //    const product = products.filter(p=>p.id == searchparams.get("productId"))
              const[product,setProduct] = useState({})

            useEffect(()=>{
                fetch('https://dummyjson.com/products/'+searchparams.get("productId"))
                .then(res => res.json())
                .then(res=>{
                    setProduct(res)
                });
            },[product])
    return ( <>
         <div className="container">
            <div className="row p-4 align-items-center">
                <div className=" col col-md-6">
                    {/* <img className='img-fluid' src={product.images[0]} width="100%"/> */}
                </div>
                <div className=" col col-md-6 pt-4">
                   <h3>{product.title}</h3>
                   <p className='fs-5 text-muted'>{product.description}</p>
                   <p>
                    <span className='fs-2 text-decoration-line-through text-muted'>${product.price}</span>
                   <span className='badge bg-warning ms-3 fs-4'>{product.discountPercentage}%</span>
                   </p>
                   <p className='fs-1'>${(product.price*(100-product.discountPercentage))/100}</p>
                </div>
            </div>
         </div>
    </> );
}
 
export default ProductDetail;