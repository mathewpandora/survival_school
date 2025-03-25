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
        <div className="w-full h-auto md:h-[66.67vh] bg-[#0B1409] flex flex-col justify-between items-center pt-2 pb-8 md:py-8 relative font-normal">
            {/* Линия в левом нижнем углу */}
            <img
                src="/Vector 5.png"  // Замените на правильный путь к изображению
                alt="Left Line"
                className="absolute bottom-0 left-0 w-[100px] md:w-[200px] h-auto z-2 opacity-30 md:opacity-100" // Разместите изображение в левом нижнем углу
            />
            {/* Линия в правом нижнем углу */}
            <img
                src="/Vector 4.png"  // Замените на правильный путь к изображению
                alt="Right Line"
                className="absolute bottom-0 right-0 w-[100px] md:w-[200px] h-auto z-2 opacity-30 md:opacity-100" // Разместите изображение в правом нижнем углу
            />
            <div className="flex flex-col items-center space-y-6 z-4">
                <TopTitle title={block5Data.topTitle} />
            
                <button
                    onClick={handleClick}
                    className="px-8 md:px-10 py-3 md:py-6 border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-[55px] text-[1.5rem] md:text-[2rem] text-sm hover:bg-[#78845F] hover:text-white transition duration-300"
                    style={{
                        // fontSize: "2rem"
                    }}
                >
                    {block5Data.buttonText}
                </button>
                
            </div>
            <div>
                <BottomSignature signature={block5Data.bottomSignature} />
            </div>
        </div>
    );
};

export default Block5;
