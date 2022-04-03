import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews,setreviews] = useState([])
    useEffect( () => {
        fetch('review-data.json')
        .then(res=> res.json())
        .then(data => setreviews(data))
    },[])
    return [reviews,setreviews]
};

export default useReviews;