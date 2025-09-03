
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App.jsx'
import Shop from '../components/shop/shop.jsx'
import NotFound from './global/notFound.jsx'
import initialShopState from './helpers/initialState.js'

// Main Router Component

const MainRouter = () => {
    const [storeState, setStoreState] = useState(initialShopState);
    const [cartAmount, setCartAmount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <Routes>
            <Route path="/" element={ <App setCartAmount={setCartAmount} cartAmount={cartAmount} cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} /> }></Route>
            <Route path="/home" element={ <App cartAmount={cartAmount} cartOpen={cartOpen} setCartOpen={setCartOpen}/> }></Route>
            <Route path="shop" element={ <Shop cartOpen={cartOpen} setCartOpen={setCartOpen} storeState={storeState} setStoreState={setStoreState} cartAmount={cartAmount} setCartAmount={setCartAmount} setCartItems={setCartItems} cartItems={cartItems} /> }></Route>
            <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
    )
} 

export default MainRouter;



