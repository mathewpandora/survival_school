import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopTitle from '../componetns/block5/TopTitle';
import BottomSignature from '../componetns/block5/BottomSignature';
import "../App.css";

const Block5 = ({ block5Data }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/apply');
    };

    return (
        <div className="w-full h-screen bg-[#0B1409] flex flex-col justify-between items-center py-10">
            <TopTitle title={block5Data.topTitle} />
            <div className="flex flex-col items-center space-y-4">
                <button
                    onClick={handleClick}
                    className="px-8 py-4 border-2 border-[#78845F] text-[#78845F] rounded-[25px] text-sm uppercase hover:bg-[#78845F] hover:text-white transition duration-300"
                >
                    {block5Data.buttonText}
                </button>
                <BottomSignature signature={block5Data.bottomSignature} />
            </div>
        </div>
    );
};

export default Block5;
