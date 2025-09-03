
import { useState } from 'react';
import '../../styles/components/cart.scss';
import EmptyCart from '../helpers/emptyCart';
import FilledCart from '../helpers/filledCart';
import CheckOut from '../helpers/notis/checkOut';

// Cart Component

const Cart = ({ cartItems, cartAmount, setCartAmount, cartOpen, setCartOpen, setCartItems }) => {

    const [tryingCheckout, setTryingCheckout] = useState(false);

    const closeCart = () => setCartOpen(false);

    return (
        <aside className={`shoppingCart ${cartOpen ? 'viewing' : ''}`}>
            <div className="cartHeader">
                <h3>Shopping Cart</h3>
                <div className="closer">
                    <p onClick={closeCart}>Close</p>
                </div>
            </div>
            {   
                cartAmount === 0 ? 
                    <EmptyCart /> : 
                    <FilledCart 
                        setCartAmount={setCartAmount} 
                        cartItems={cartItems} 
                        setCartItems={setCartItems} 
                        setTryingCheckout={setTryingCheckout} 
                    /> 
            }
            {   
                tryingCheckout ? 
                    <CheckOut tryingCheckout={tryingCheckout} /> : 
                    null
            }
        </aside>
    )
}

export default Cart;







