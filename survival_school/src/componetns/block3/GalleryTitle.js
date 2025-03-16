import React from 'react';

const GalleryTitle = ({ title }) => {
    return (
        <div
            className="mt-12 text-center text-[#000] uppercase"
            style={{
                fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                fontSize: '57.26px',
                lineHeight: '132%',
                letterSpacing: '0%',
                textAlign: 'center'
            }}
        >
            {title}
        </div>
    );
};

export default GalleryTitle;
