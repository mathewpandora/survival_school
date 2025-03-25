// components/block5/BottomSignature.jsx
import React from 'react';

const BottomSignature = ({ signature }) => {
    return (
        <div
            className="pt-20 md:pt-0 md:mb-10 text-white text-center text-[17px] md:text-[34px] lg:text-[38px]"
            style={{
                // fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                // fontSize: '38.41px',
                lineHeight: '122%',
                letterSpacing: '0%'
            }}
        >
            {signature}
        </div>
    );
};

export default BottomSignature;
