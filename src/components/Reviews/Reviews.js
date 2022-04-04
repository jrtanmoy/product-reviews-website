import useReviews from '../../Hook/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setreviews] = useReviews([])

    return (
        <div className='container'>
            <h2 className='review-title'>See, What Our Customers Say!</h2>
           <div className='review-card'>
           {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
           </div>
        </div>
    );
};

export default Reviews;