import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProductListingPage from './pages/ProductListing';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/products' element={<ProductListingPage/>}/>
        </Routes>
    </BrowserRouter>


   

  );
}

export default App;
