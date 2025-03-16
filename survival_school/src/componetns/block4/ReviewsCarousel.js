// components/block4/ReviewsCarousel.jsx
import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const ReviewsCarousel = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Пример API с отзывами
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Ошибка загрузки отзывов:', error));
    }, []);

    return (
        <div className="absolute top-[50%] w-full overflow-hidden px-8">
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                ) : (
                    <p className="text-white">Загрузка отзывов...</p>
                )}
            </div>
        </div>
    );
};

export default ReviewsCarousel;
