import {createBrowserRouter} from 'react-router'
import Home from './pages/home';
const router = createBrowserRouter([
    {
        path:"/",
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
            path:"login",
            element:<h1>Login page</h1>
        }]
    },
    {path:"/home", element:<h1>Home Page</h1>}
])

export default router;