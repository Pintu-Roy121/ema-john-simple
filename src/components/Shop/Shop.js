import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDB, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

// count
// perpage (size) = 10
// Total pages = count / size
// page = currnet Page

const Shop = () => {
    // const { products, count } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(12);

    const pages = Math.ceil(count / pageSize);
    // console.log(pages);

    useEffect(() => {
        const url = (`http://localhost:5000/products?page=${page}&pageSize=${pageSize}`);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [page, pageSize])

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const ids = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (const id in storedCart) {
                    const addedProduct = data.find(product => id === product._id)
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart)
            })



    }, [products])

    const handleAddToCart = (selectedProduct) => {

        // const newCart = [...cart, selectedProduct]
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct);
        // console.log(exists);
        if (exists) {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        } else {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        setCart(newCart);
        addToDB(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container ">
                <Cart
                    clearCart={clearCart}
                    cart={cart}
                >
                    <button className='review-orders'>
                        <Link to='/orders'>Review Orders</Link>
                    </button>
                </Cart>
            </div>
            <div className="pagination">
                <p>Current Selected page: {page} size: {pageSize}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        // className={page === number && 'selected'}
                        className={page === number ? 'selected' : ''}
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select defaultValue={12} onChange={(event) => setPageSize(event.target.value)}>
                    <option value="5" >5</option>
                    <option value="5" >10</option>
                    <option value="10" >12</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;