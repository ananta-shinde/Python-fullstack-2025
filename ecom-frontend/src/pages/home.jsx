
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
            <BannerSlider/>
            <ProductSlider/>
        </> 
     );
}
 
export default Home;