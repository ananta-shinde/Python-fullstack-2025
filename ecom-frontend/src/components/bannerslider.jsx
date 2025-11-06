const BannerSlider = () => {
    return ( 
        <div className="container bg-warning" style={{height:"75vh",overflow:"hidden",position:"relative"}}>
            <div className="carousel slide" id="banner-slider" data-bs-ride="carousel">
                <div className="carousel-indicators position-absolute bottom-0">
                    <button className="active" data-bs-target="#banner-slider" data-bs-slide-to="0"></button>
                    <button data-bs-target="#banner-slider" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner ">
                    
                    
                    <div className="carousel-item active">
                        <img className="w-100"   src="https://murraysinteriors.com.au/wp-content/uploads/2018/09/dummy-banner.jpg"/>
                        <div className="carousel-caption ">
                           <h3>Click me</h3>     
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="https://s3.envato.com/files/77714464/750x300.jpg"/>
                        <div className="carousel-caption ">
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BannerSlider;