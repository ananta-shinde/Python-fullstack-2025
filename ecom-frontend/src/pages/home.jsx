
import ProductSlider from "../components/productslider"
import BannerSlider from "../components/bannerslider";
import Navbar from "../components/navbar";
import Titlebar from "../components/titlebar";
import CategoryBar from "../components/category/categorybar";
import CategorySideNav from "../components/category/cartegorysidenav";
import CategoryMegaMenu from "../components/category/categoryMegaMenu";
import Counter from "../components/counter";

const Home = () => {
    return (
        <>

        <Titlebar/>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <CategorySideNav/>
                </div>
                <div className="col-9">
                            <Navbar/>
                            <CategoryMegaMenu></CategoryMegaMenu>
                            <Counter/>
                    <CategoryBar/>
                    {/*<CategoryBar/>
                    <HeroBanerSlider/> */}
                    <BannerSlider/>
                    <ProductSlider/>
                </div>
            </div>
        </div>
        
        </> 
     );
}
 
export default Home;