import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, ratting, description } = review
    return (
        <div className='review'>
            <h4>Name: {name}</h4>
            <p>Description: {description}</p>
            <h5>Ratting: {ratting}</h5>
        </div>
    );
};

export default Review;