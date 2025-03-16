import React from 'react';
import ImageBlock from '../componetns/block2/ImageBlock';
import ProjectText from '../componetns/block2/ProjectText';
import SurvivalSchool from '../componetns/block2/SurvivalSchool';

const Block2 = ({ leftImage, rightImage, title2, paragraphs, survivalHeading, survivalItems }) => {
    return (
        <div className="w-full h-screen flex items-center justify-center relative bg-[#010f01]">
            {/* Картинка в нижнем правом углу */}
            <ImageBlock
                src={rightImage.src}
                alt={rightImage.alt}
                styleClass="absolute bottom-5 right-5"
                customStyle={{
                    width: '23vw',
                    height: '54vh',
                    objectFit: 'cover',
                }}
            />

            {/* Картинка в левом верхнем углу */}
            <ImageBlock
                src={leftImage.src}
                alt={leftImage.alt}
                styleClass="absolute top-[10%] left-5"
                customStyle={{
                    width: '23vw',
                    height: '54vh',
                    objectFit: 'cover',
                }}
            />

            {/* Текст */}
            <ProjectText title2={title2} paragraphs={paragraphs} />

            {/* Дополнительный блок с большим отступом */}
            <SurvivalSchool heading={survivalHeading} items={survivalItems} />
        </div>
    );
};

export default Block2;
