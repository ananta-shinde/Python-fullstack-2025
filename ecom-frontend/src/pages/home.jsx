
import ProductSlider from "../components/productslider"
import BannerSlider from "../components/bannerslider";
import Navbar from "../components/navbar";
import Titlebar from "../components/titlebar";

const Home = () => {
    return (
        <>
        <Titlebar/>
        <Navbar/>
        {/*<CategoryBar/>
        <HeroBanerSlider/> */}
        <BannerSlider/>
        <ProductSlider/>
        </> 
     );
}
 
export default Home;