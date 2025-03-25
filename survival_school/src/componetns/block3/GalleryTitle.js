import React from 'react';

const GalleryTitle = ({ title }) => {
    return (
        <div
            className="mt-12 text-center text-[#000] uppercase text-[30px] lg:text-[53px] max-w-[90%] lg:max-w-[100%]"
            style={{
                // fontFamily: 'Kharkiv Tone',
                fontWeight: 400,
                // fontSize: '53.26px',
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
