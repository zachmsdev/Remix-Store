
import { IoCloseOutline } from "react-icons/io5";

// Full Cart Component

const FilledCart = ({ cartItems, setCartItems, setCartAmount, setTryingCheckout }) => {

    const stringToNumber = (element) => {
        return parseFloat(element.replace('$', '').trim());
    }

    const checkOutPopup = () => {
        setTryingCheckout(true);
        setTimeout(() => { setTryingCheckout(false) }, 2000)
    }

    const calculateSubtotal = () => {

        const theTotal = cartItems.reduce((subtotal, item) => {
            const price = parseFloat(item.cartItemPrice.replace('$', ''))
            return subtotal + price; 
        }, 0);

        const formattedPrice = parseInt(theTotal).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return formattedPrice;

    }

    const subtotal = calculateSubtotal();

    const positiveClick = (index) => {

        let quantityChanged = false;

        const updatedQuantity = cartItems.map((item, i) => {

            if (i === index) {
                const itemPrice = stringToNumber(item.price);
                const newCartItemPrice = (item.quantity + 1) * itemPrice;

                if (item.quantity + 1 <= item.maxStock) {
                    quantityChanged = true;
                    return { 
                        ...item, 
                        quantity: item.quantity + 1,
                        cartItemPrice: `$${newCartItemPrice.toFixed(2)}`
                    }
                }
            }

            return item;

        })

        if (quantityChanged) {
            setCartItems(updatedQuantity);
            setCartAmount(prev => prev + 1);
        }

    }

    const negativeClick = (index) => {

        const stringToNumber = (element) => {
            return parseFloat(element.replace('$', '').trim());
        }

        let didDecrease = false;

        const updatedQuantity = cartItems.map((item, i) => {

            if (i === index) {
                item.quantity > 1 ? didDecrease = true : didDecrease = false
                const itemPrice = stringToNumber(item.price);
                const updatedPrice = (item.quantity - 1) * itemPrice;
                return item.quantity > 1 ? { 
                    ...item, 
                    quantity: item.quantity - 1,
                    cartItemPrice: `$${updatedPrice.toFixed(2)}`
                } : item;
            }

            return item;

        })

        setCartItems(updatedQuantity);

        if (didDecrease) {
            setCartAmount(prev => prev - 1);
        }

    }

    const deleteItem = (clickedIndex, clickedItem) => {

        const itemDeleted = cartItems.filter((_, index) => index !== clickedIndex);

        setCartItems(itemDeleted);
        setCartAmount(prev => prev - clickedItem.quantity);

    }

    return (
        <div className="filledCart">
            <ul className="productDisplay">
                {
                    cartItems.map((item, index) => {
                        return <li key={index}>
                            <div className="productImage">
                                <img src={item.imageURL}></img>
                            </div>
                            <div className="productInfo">
                                <h4>{item.productName}</h4>
                                <div className="counter">
                                    <button onClick={() => {
                                        negativeClick(index);
                                    }} className="negative">-</button>
                                    <div>{item.quantity}</div>
                                    <button onClick={() => {
                                        positiveClick(index);
                                    }} className="positive">+</button>
                                </div>
                                <p className="itemPrice">{item.cartItemPrice}</p>
                                <IoCloseOutline onClick={() => {
                                    deleteItem(index, item);
                                }} className="deleter" />
                            </div>
                        </li>
                    })
                }
            </ul>
            <div className="subtotal">
                <p>Subtotal:</p>
                <p>{subtotal}</p>
            </div>
            <div className="checkout">
                <button onClick={checkOutPopup}>Checkout</button>
            </div>
        </div>
    )
}

export default FilledCart;









