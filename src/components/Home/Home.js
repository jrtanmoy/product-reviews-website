import React, { useEffect, useState } from 'react';
import './Home.css'
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReviews';

const Home = () => {
    const [reviews,setreviews] = useReviews([])
    

    return (
        <div className='container'>
            <h1 className='h1-title-style'> Product Reviews !!!</h1>
            <div className="first-section-container">
                <div className="first-section-container-info">
                    <h2>Your next Guiter</h2>
                    <h2 className='h2-style'>Your Best Guiter</h2>
                    <p>The Epiphone J200 EC Studio pays homage to its Gibson counterpart, with stunning vintage correct stylings. The moustache bridge, decorative tortoiseshell-style pickguard and pearloid crown inlays add a level of class to this instrument and we must say, it sounds as good as it looks, as well. The sound is balanced rather than boomy, giving strummed chords the fullness that made the J-200's reputation. Expect articulate highs and a warm foundation in the bottom end. </p>
                </div>
                <div className="">
                    <img src="https://m.media-amazon.com/images/I/71jQsSC3ovL._AC_SX679_.jpg" alt="" />
                </div>
            </div>
            <div className='reviews-container'>
                <h1 className='h1-title-style'>Customer Reviews(3)</h1>
                <div className='review-card'>
                    {
                        reviews.slice(0,3).map(review =><Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <span className='reviews-link-style'><Link to ="/reviews">See All reviews</Link></span>
            </div>
        </div>
    );
};

export default Home;