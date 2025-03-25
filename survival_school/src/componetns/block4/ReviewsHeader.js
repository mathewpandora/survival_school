// components/block4/ReviewsHeader.jsx
import React from 'react';

const ReviewsHeader = ({ headerText }) => {
    return (
        <div
            className="md:absolute py-[10%] px-[3%] md:py-0 md:px-0 top-[15%] left-[5%] text-white uppercase text-left text-[40px] md:text-[60px]"
            style={{
                // fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                // fontSize: '60px',
                lineHeight: '1.2',
                letterSpacing: '0%',
                zIndex: 4
            }}
            dangerouslySetInnerHTML={{ __html: headerText }}
        />
    );
};

export default ReviewsHeader;
