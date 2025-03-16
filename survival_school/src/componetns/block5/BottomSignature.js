// components/block5/BottomSignature.jsx
import React from 'react';

const BottomSignature = ({ signature }) => {
    return (
        <div
            className="mb-10 text-white text-center"
            style={{
                fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                fontSize: '38.41px',
                lineHeight: '122%',
                letterSpacing: '0%'
            }}
        >
            {signature}
        </div>
    );
};

export default BottomSignature;
