import { useSearchParams } from 'react-router';
import products from '../database/product.json'
const ProductDetail = () => {
               const[searchparams] =useSearchParams();
               const product = products.filter(p=>p.id == searchparams.get("productId"))
    return ( <>
         <div className="container">
            <div className="row p-4 align-items-center">
                <div className=" col col-md-6">
                    <img className='img-fluid' src={product[0].images[0]} width="100%"/>
                </div>
                <div className=" col col-md-6 pt-4">
                   <h3>{product[0].title}</h3>
                   <p className='fs-5 text-muted'>{product[0].description}</p>
                   <p>
                    <span className='fs-2 text-decoration-line-through text-muted'>${product[0].price}</span>
                   <span className='badge bg-warning ms-3 fs-4'>{product[0].discountPercentage}%</span>
                   </p>
                   <p className='fs-1'>${(product[0].price*(100-product[0].discountPercentage))/100}</p>
                </div>
            </div>
         </div>
    </> );
}
 
export default ProductDetail;