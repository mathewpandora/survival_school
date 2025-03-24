import React from 'react'

const ProjectText = ({ title2, paragraphs }) => {
    return (
        <div className='md:absolute md:top-[10%] md:left-[calc(23vw+20px)] md:w-[calc(100%-23vw-20px)] w-full text-[#C9C9C9] px-[5%] mt-4 md:mt-0'>
            {/* Заголовок */}
            <h2 className='text-[24px] md:text-[30px] font-bold text-left text-[#C9C9C9]'>
                {title2}
            </h2>
            {/* Абзацы */}
            {paragraphs.map((text, index) => (
                <p
                    key={index}
                    className='text-[16px] md:text-[18px] mt-2 text-left text-[#C9C9C9]'
                >
                    {text}
                </p>
            ))}
        </div>
    )
}

export default ProjectText
