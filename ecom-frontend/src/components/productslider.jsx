const ProductSlider = () => {
    return ( 
        <div className="container bg-info p-4" >
           <div className="carousel slide" id="product-slider">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <div className="row" >
                                <div className="col-3">
                                    <div className="card py-3" >
                                        <img className="mx-auto d-block"  style={{width:"250px",height:"300px"}} src="https://maja.eigen.co.id/wp-content/uploads/2024/11/dummy-product-10.jpeg"/>
                                        <div className="card-body">
                                            <h4 className="text-center">Product Name</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card py-3" >
                                        <img className="mx-auto d-block"  style={{width:"250px",height:"300px"}} src="https://maja.eigen.co.id/wp-content/uploads/2024/11/dummy-product-10.jpeg"/>
                                        <div className="card-body">
                                            <h4 className="text-center">Product Name</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card py-3" >
                                        <img className="mx-auto d-block"  style={{width:"250px",height:"300px"}} src="https://maja.eigen.co.id/wp-content/uploads/2024/11/dummy-product-10.jpeg"/>
                                        <div className="card-body">
                                            <h4 className="text-center">Product Name</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card py-3" >
                                        <img className="mx-auto d-block"  style={{width:"250px",height:"300px"}} src="https://maja.eigen.co.id/wp-content/uploads/2024/11/dummy-product-10.jpeg"/>
                                        <div className="card-body">
                                            <h4 className="text-center">Product Name</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default ProductSlider;