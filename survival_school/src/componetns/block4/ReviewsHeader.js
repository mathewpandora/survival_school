// components/block4/ReviewsHeader.jsx
import React from 'react';

const ReviewsHeader = ({ headerText }) => {
    return (
        <div
            className="absolute top-[15%] left-[5%] text-white uppercase text-left"
            style={{
                fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                fontSize: '60px',
                lineHeight: '70px',
                letterSpacing: '0%'
            }}
            dangerouslySetInnerHTML={{ __html: headerText }}
        />
    );
};

export default ReviewsHeader;
