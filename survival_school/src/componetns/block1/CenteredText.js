import React from "react";

const CenteredText = ({ title, description }) => {
    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-custom text-center max-w-[500px] md:max-w-[1000px]"
            style={{
                textShadow: '0 0 15px rgba(110, 127, 96, 1), 0 0 20px rgba(110, 127, 96, 0.5), 0 0 25px rgba(110, 127, 96, 0.3)',
            }}
        >
            <h1 className="text-[40px] md:text-[70px] leading-tight">{title}</h1>
            <p className="text-[20px] md:text-[40px] mt-2">{description}</p>
        </div>
    );
};

export default CenteredText;
