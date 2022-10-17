import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, shipping, img } = product
    return (
        <div className='review-item'>

            <img src={img} alt="" />

            <div className="review-details-container">
                <div className="review-details">
                    <h4 className='item-name'>{name}</h4>
                    <h5>Shipping: {shipping}$</h5>
                    <h5>Price: {price}$</h5>
                    <h5>Quantity: {quantity}</h5>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='delete-btn pinter'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;