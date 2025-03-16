// pages/Block4.jsx
import React, {useEffect} from 'react';
import ReviewsHeader from '../componetns/block4/ReviewsHeader';
import ReviewsCarousel from '../componetns/block4/ReviewsCarousel';
import "../App.css";

const Block4 = ({block4Data}) => {
    useEffect(() => {
    }, []);
    return (
        <div
            className="w-full h-screen bg-cover bg-center relative flex flex-col"
            style={{ backgroundImage: `url(/${block4Data.backgroundImage})` }}
        >
            <ReviewsHeader headerText={block4Data.headerText} />
            <ReviewsCarousel />
        </div>
    );
};

export default Block4;
