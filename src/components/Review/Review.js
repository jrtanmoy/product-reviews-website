import React from 'react';
import './Review.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Review = ({ review }) => {
    const { name, ratting, description } = review
    return (
        <div className='review'>
            <h4>Review By: {name}</h4>
            <p>" {description} "</p>
            <h5>Ratting: {ratting}
            <span className='icon'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
            </h5>
        </div>
    );
};

export default Review;