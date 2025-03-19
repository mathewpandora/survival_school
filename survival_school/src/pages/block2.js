'use client';
import React from 'react';
import ImageBlock from '../componetns/block2/ImageBlock';
import ProjectText from '../componetns/block2/ProjectText';
import SurvivalSchool from '../componetns/block2/SurvivalSchool';

const Block2 = ({ leftImage, rightImage, title2, paragraphs, survivalHeading, survivalItems }) => {
    return (
        <div className="w-full h-screen relative bg-[#010f01] overflow-auto">
            {/* Изображение слева */}
            {/* Десктоп версия */}
            <ImageBlock
                src={leftImage.src}
                alt={leftImage.alt}
                styleClass="hidden md:block absolute top-[10%] left-5"
                customStyle={{
                    width: '23vw',
                    height: '54vh',
                    objectFit: 'cover',
                }}
            />
            {/* Мобильная версия */}
            <ImageBlock
                src={leftImage.src}
                alt={leftImage.alt}
                styleClass="block md:hidden mx-auto my-4"
                customStyle={{
                    width: '40%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />

            {/* Изображение справа */}
            {/* Десктоп версия */}
            <ImageBlock
                src={rightImage.src}
                alt={rightImage.alt}
                styleClass="hidden md:block absolute bottom-5 right-5"
                customStyle={{
                    width: '23vw',
                    height: '54vh',
                    objectFit: 'cover',
                }}
            />
            {/* Мобильная версия */}
            <ImageBlock
                src={rightImage.src}
                alt={rightImage.alt}
                styleClass="block md:hidden mx-auto my-4"
                customStyle={{
                    width: '40%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />

            {/* Текстовый блок */}
            <ProjectText title2={title2} paragraphs={paragraphs} />

            {/* Блок выживания */}
            <SurvivalSchool heading={survivalHeading} items={survivalItems} />
        </div>
    );
};

export default Block2;
