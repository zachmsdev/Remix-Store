
import initialShopState from '../helpers/initialState.js';
import React, { useState } from 'react'

// Select Product Component

const SelectProduct = ({ storeState, setStoreState, setCartAmount, setCartItems, cartItems }) => {

    const permaStoreData = initialShopState;

    const stringToNumber = (element) => {
        return parseFloat(element.replace('$', '').trim());
    }

    // For the "Show all" button in store
    const changeStoreState = () => setStoreState(permaStoreData);

    // For the "Add to cart" button in store
    const updateStore = (element) => {

        // Looking for existing item in cart
        const existingItem = cartItems.find(item => item.productName === element.productName);

        // Updating cart amount
        setCartAmount(num => {
            if (!existingItem) {
                return ++num;
            } else {
                if (existingItem.quantity + 1 <= existingItem.maxStock) {
                    return ++num;
                }
            }
            return num;
        });

        // Seting cart items
        setCartItems(prev => {
            if (!existingItem) {
                return [...prev, element];
            } else {
                // ~~> Updating cart item quantity and price if it exists
                const thePrice = stringToNumber(element.cartItemPrice);
                return prev.map(item => {
                    if (item.productName === element.productName) {
                        const updatedQuantity = item.quantity + 1;
                        if (updatedQuantity <= item.maxStock) {
                            return { 
                                ...item, 
                                quantity: item.quantity + 1,
                                cartItemPrice: `$${(thePrice * updatedQuantity).toFixed(2)}` 
                            }
                        }
                    }
                    return item;
                });
            }
        });

    }


    return (
        <section className="selectProduct">
            <div className="productContainer">
                <h1>Our Products<span onClick={changeStoreState}>Show All</span></h1>
                <ul className="products">
                    { storeState.map((element, index) => {
                        // Getting specific item
                        const cartItem = cartItems.find(item => item.productName === element.productName);
                        // Grabbing quantity of that item
                        const quantityInCart = cartItem ? cartItem.quantity : 0;

                        return <li key={index}>
                                <img src={ element.imageURL }></img>
                                <h4 className="productName">{ element.productName }</h4>
                                <p className="category">{ element.category }</p>
                                <h4 className="price">{ element.price }</h4>
                                <div className="addToCartSection">
                                    <button 
                                    onClick={() => { updateStore(element); }} 
                                    className={quantityInCart >= element.maxStock ? 'maxed' : null} >
                                        { quantityInCart >= element.maxStock ? 'Max Stock' : 'Add to cart' }
                                    </button>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )

}

export default SelectProduct;




