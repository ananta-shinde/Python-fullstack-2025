
function ProductCard(props){
    return(
        <div className="col col-md-6 col-lg-3">
        <div className="card">
            <img className="product-thumbnail" src={props.product.thumbnail} alt='product-Image'/>
            <h4>{props.product.title}</h4>
        </div>
    </div>
    )
}

export default ProductCard;