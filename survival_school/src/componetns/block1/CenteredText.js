import React from "react";

const CenteredText = ({ title, description }) => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-custom font-normal text-[40.7px] leading-[100%] tracking-[0%] max-w-none"
             style={{
                 textShadow: '0 0 30px rgba(110, 127, 96, 1), 0 0 40px rgba(110, 127, 96, 0.5), 0 0 50px rgba(110, 127, 96, 0.3)',
             }}>
            <h1 className="text-[70.12px]">{title}</h1>
            <p className="text-[40.7px]">{description}</p>
        </div>
    );
};

export default CenteredText;