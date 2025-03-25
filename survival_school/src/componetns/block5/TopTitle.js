// components/block5/TopTitle.jsx
import React from 'react';

const TopTitle = ({ title }) => {
    return (
        <div
            className="mt-10 text-white text-center uppercase text-[26px] md:text-[50px] lg:text-[60px]"
            style={{
                // fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                // fontSize: '60px',
                lineHeight: '122%',
                letterSpacing: '0%'
            }}
        >
            {title}
        </div>
    );
};

export default TopTitle;
