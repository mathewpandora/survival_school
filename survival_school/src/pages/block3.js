import React from 'react';
import ImageGallery from '../componetns/block3/ImageGallery';
import GalleryTitle from '../componetns/block3/GalleryTitle';
import BottomBlock from '../componetns/block3/BottomBlock';

const Block3 = ({ data }) => {
    const { imagesAPI, limit, title, bottomText, buttonText } = data;

    return (
        <div className="w-full h-screen relative bg-[#F7F5E9] flex flex-col items-center justify-start pt-10">
            <ImageGallery imagesAPI={imagesAPI} limit={limit} />
            <GalleryTitle title={title} />

            {/* Добавляем SVG линию */}
            <div className="my-4">
                <img src="Vector 3.svg" alt="Line" className="w-full" />
            </div>

            <BottomBlock bottomText={bottomText} buttonText={buttonText} />
        </div>
    );
};

export default Block3;
