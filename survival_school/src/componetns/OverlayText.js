import React from 'react';

const OverlayText = () => {
    return (
        <div className="absolute top-1/2 right-[2%] transform -translate-y-1/2 rotate-[-15deg] font-normal text-[28px] md:text-[36px] leading-[120%] text-center text-[#C9C9C9] z-10 max-w-[80%] hidden md:block font-['Mr_Lonely']">
            Каждый шаг делает тебя <br /> сильнее
        </div>
    );
};

export default OverlayText;