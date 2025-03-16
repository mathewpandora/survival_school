import React from 'react';

const ProjectText = ({ title2, paragraphs }) => {
    return (
        <div className="absolute top-[10%] left-[calc(23vw+20px)] w-[calc(100%-23vw-20px)] text-[#C9C9C9] px-[5%]">
            {/* Заголовок */}
            <h2 className="text-[30px] font-bold text-left text-[#C9C9C9]">
                {title2}
            </h2>
            {/* Абзацы */}
            {paragraphs.map((text, index) => (
                <p key={index} className="text-[18px] mt-2 text-left text-[#C9C9C9]">
                    {text}
                </p>
            ))}
        </div>
    );
};

export default ProjectText;
