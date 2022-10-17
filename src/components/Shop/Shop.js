import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDB, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart)
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => id === product.id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {

        // const newCart = [...cart, selectedProduct]
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct);
        // console.log(exists);
        if (exists) {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        } else {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        setCart(newCart);
        addToDB(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container ">
                <Cart cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;