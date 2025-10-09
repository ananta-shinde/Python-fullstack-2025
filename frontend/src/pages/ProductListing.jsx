import ProductCard from '../components/ProductCard';
import products from '../database/product.json'


function ProductListingPage(){
    return(
        <div className="container">
            <div className="row">
                {products.map(p=>(<ProductCard product={p}/>))}
            </div>
        </div>
    )
}

export default ProductListingPage;