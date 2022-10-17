import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucpvmQPFPFFQ2PomrKQh9zw7AV_OROfs6pg&usqp=CAU"
    // console.log(props.product);
    const { name, img, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <div>
                <img src={img ? img : ''} alt="" />
            </div>
            <div className='product-details'>
                <div>
                    <h3 className='product-name'>{name}</h3>
                    <h3 className='price'>Price:$ {price}</h3>
                </div>
                <div className='product-info'>
                    <p>Mantufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)}
                className='btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;