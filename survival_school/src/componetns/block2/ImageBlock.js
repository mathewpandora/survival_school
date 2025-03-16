import React from 'react';

const ImageBlock = ({ src, alt, styleClass, customStyle }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={styleClass}
            style={customStyle}
        />
    );
};

export default ImageBlock;
