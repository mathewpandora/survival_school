// components/block4/ReviewCard.jsx
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="min-w-[400px] max-w-[400px] min-h-[200px] max-h-[700px] p-6 rounded-xl bg-[#264233] text-white">
            <h3 className="text-xl font-bold mb-3">{review.name}</h3>
            <p className="text-md">{review.body}</p>
        </div>
    );
};

export default ReviewCard;
