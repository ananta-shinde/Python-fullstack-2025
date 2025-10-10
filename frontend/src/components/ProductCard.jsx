import { Link } from "react-router";

function ProductCard(props){
    return(
        <div className="col col-md-6 col-lg-3 ">
        <Link className="text-decoration-none text-dark" to={"detail?productId="+props.product.id}>
        <div className="card p-4 border-0  ">
            <img className="product-thumbnail" src={props.product.thumbnail} alt='product-Image'/>
            <h5>{props.product.title}</h5>
           <div className="d-flex align-items-center justify-content-between">
                <p className="fs-3">{props.product.price}</p>
                <p className="badge bg-success w-25 " style={{height:"fit-content"}}>{props.product.rating}</p>
           </div>
            
        </div>
        </Link>
    </div>
    )
}

export default ProductCard;