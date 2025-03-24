import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const ReviewsCarousel = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shv-back.itc-hub.ru/api/v1/testimonials/')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Ошибка загрузки отзывов:', error));
    }, []);

    return (
        <div className="absolute top-[50%] w-full overflow-hidden px-4 max-w-screen-xl mx-auto">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            className="h-40 min-w-[300px] flex-grow flex-shrink"
                        />
                    ))
                ) : (
                    <p className="text-white">Загрузка отзывов...</p>
                )}
            </div>
        </div>
    );
};

export default ReviewsCarousel;
