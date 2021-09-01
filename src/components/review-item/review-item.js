import React from 'react';
import './review-item.scss';

const ReviewItem = ({ item }) => {

    return(
        <li className="review_item">
            <div className="review_item__author">{item.author}</div><hr/>
            <div className="review_item__text">{item.text}</div>
        </li>
    )
};

export default ReviewItem;