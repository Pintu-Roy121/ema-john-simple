import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
// import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart)

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    />)
                }
                {
                    cart.length === 0 && <h3>No Iteam Found: <Link to='/'>Please Shop More</Link></h3>
                }

            </div>
            <div className="cart-container ">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'><button className='shipping-btn'>Shipping</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;