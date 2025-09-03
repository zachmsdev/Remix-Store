
import '../../styles/components/shopPage.scss'
import InfoBar from '../shop/infoBar.jsx'
import Header from '../../components/global/header.jsx'
import ShopIntro from '../shop/shopIntro.jsx'
import SelectProduct from '../shop/selectProduct.jsx'
import Cart from '../../components/global/cart.jsx'
import DarkOverlay from '../../components/global/darkOverlay.jsx'

// Main Shop Component

const Shop = ({ storeState, setStoreState, cartAmount, setCartAmount, setCartItems, cartItems, cartOpen, setCartOpen }) => {

    return (
        <section className="theShop">
            <InfoBar />
            <Header 
                cartAmount={cartAmount} 
                cartOpen={cartOpen} 
                setCartOpen={setCartOpen} 
            />
            <ShopIntro 
                storeState={storeState} 
                setStoreState={setStoreState} 
            />
            <SelectProduct 
                storeState={storeState} 
                setStoreState={setStoreState} 
                setCartAmount={setCartAmount} 
                setCartItems={setCartItems}
                cartItems={cartItems} 
            />
            <Cart 
                cartItems={cartItems} 
                setCartAmount={setCartAmount} 
                cartAmount={cartAmount} 
                cartOpen={cartOpen} 
                setCartOpen={setCartOpen} 
                setCartItems={setCartItems} 
            /> 
            { cartOpen ? <DarkOverlay /> : null }
        </section>
    )

}

export default Shop;






