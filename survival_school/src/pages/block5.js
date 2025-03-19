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
        <div className="w-full h-screen bg-[#0B1409] flex flex-col justify-between items-center py-10 relative">
            {/* Линия в левом нижнем углу */}
            <img
                src="/Vector 5.png"  // Замените на правильный путь к изображению
                alt="Left Line"
                className="absolute bottom-0 left-0 w-[200px] h-auto" // Разместите изображение в левом нижнем углу
            />
            {/* Линия в правом нижнем углу */}
            <img
                src="/Vector 4.png"  // Замените на правильный путь к изображению
                alt="Right Line"
                className="absolute bottom-0 right-0 w-[200px] h-auto" // Разместите изображение в правом нижнем углу
            />

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
