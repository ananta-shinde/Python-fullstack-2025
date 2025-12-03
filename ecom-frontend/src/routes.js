import {createBrowserRouter} from 'react-router'
import Home from './pages/home';
import Cart from './pages/cart';
import BaseTemplate from './components/templates/base';
import ProductSlider from './components/productslider';
import LoginPage from './pages/login';
const router = createBrowserRouter([
    {
        path:"/",
        element:<BaseTemplate/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"products",
                element:<ProductSlider/>
            },
            {
                path:"cart",
                element:<Cart/>
            }
    ]
    },
    {
        path:"/login",
        element:<LoginPage/>
        }
    
])

export default router;