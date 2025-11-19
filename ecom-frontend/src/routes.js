import {createBrowserRouter} from 'react-router'
import Home from './pages/home';
import Cart from './pages/cart';
import BaseTemplate from './components/templates/base';
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
                path:"cart",
                element:<Cart/>
            }
    ]
    },
    {
        path:"/login",
        element:<h1>Login page</h1>
        }
    
])

export default router;