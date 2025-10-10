import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProductListingPage from './pages/ProductListing';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/products'>
                <Route path='' element={<ProductListingPage/>}/>
                <Route path='detail' element={<ProductDetail/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>


   

  );
}

export default App;
