import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomBlock = ({ bottomText, buttonText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/apply');
    };

    return (
        <div className="lg:absolute bottom-4 w-full flex flex-col items-center space-y-2 text-[20px] lg:text-[32px]">
            <div
                className="text-[#78845F] text-center"
                style={{
                    fontWeight: 400,
                    // fontSize: '32px',
                    letterSpacing: '0%',
                    // textTransform: 'uppercase'
                }}
            >
                {bottomText}
            </div>
            <div className="w-full flex justify-center">
                <button
                    onClick={handleClick}
                    className="px-8 py-4 border-2 border-[#78845F] text-[#78845F] rounded-[25px] text-sm hover:bg-[#78845F] hover:text-white transition duration-300"
                    style={{
                        fontSize: '1.25rem'
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default BottomBlock;