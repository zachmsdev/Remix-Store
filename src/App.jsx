
import { useState } from 'react'
import HomeHeroSection from './components/home/homeHeroSection.jsx'
import Introduction from './components/home/introduction.jsx'
import Cart from './components/global/cart.jsx'
import DarkOverlay from './components/global/darkOverlay.jsx'
import SignUp from './components/helpers/notis/signUp.jsx'

// "Home page" Component

function App({ cartAmount, cartOpen, setCartOpen, cartItems, setCartItems, setCartAmount }) {

    const [tryingSignUp, setTryingSignUp] = useState(false);

    return (
        <main>
            <HomeHeroSection 
                cartAmount={cartAmount} 
                cartOpen={cartOpen} 
                setCartOpen={setCartOpen} 
                setTryingSignUp={setTryingSignUp} 
            />
            <Introduction />
            <Cart 
                cartItems={cartItems} 
                setCartAmount={setCartAmount} 
                cartAmount={cartAmount} 
                cartOpen={cartOpen} 
                setCartOpen={setCartOpen} 
                setCartItems={setCartItems} 
            /> 
            { cartOpen ? 
                <DarkOverlay /> : 
                null 
            }
            { tryingSignUp ? 
                <SignUp tryingSignUp={tryingSignUp} /> : 
                null 
            }
        </main>
    )

}

export default App;


