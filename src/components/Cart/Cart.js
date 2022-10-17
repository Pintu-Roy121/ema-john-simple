import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart }) => {

    // console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping * quantity;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shippingCharge + tax;
    // console.log(quantity);
    return (
        <div className='cart'>
            <h1 className='heading'>Order Summery</h1>
            <p className='selectCount'>Total Selected Cart: {quantity}</p>
            <p className='selectCount'>Total Price:$ {total}</p>
            <p className='selectCount'>Total Shipping:$ {shippingCharge}</p>
            <p className='selectCount'>Tax:$ {tax}</p>
            <h5 className='grand-total'>Grand Total:${grandTotal.toFixed(2)} </h5>
            <button><Link to='/orders'>Review Orders</Link> </button>
        </div>
    );
};

export default Cart;