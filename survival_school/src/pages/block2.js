'use client'
import React from 'react'
import ImageBlock from '../componetns/block2/ImageBlock'
import ProjectText from '../componetns/block2/ProjectText'
import SurvivalSchool from '../componetns/block2/SurvivalSchool'

const Block2 = ({
                    leftImage,
                    rightImage,
                    title2,
                    paragraphs,
                    survivalHeading,
                    survivalItems,
                }) => {
    return (
        <div className='w-full min-h-screen relative bg-[#010f01] overflow-auto pb-10 md:pb-0'>
            {/* SVG с анимацией вращения */}
            <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10'>
                <img
                    src="Linked Path Group.svg"
                    alt="Декоративный элемент"
                    className='w-40 h-40 md:w-14 md:h-14 animate-spin-slow'
                />
            </div>

            {/* Остальной код без изменений */}
            <div className='md:hidden flex flex-col items-center'>
                <div className='flex justify-center gap-4 w-full my-4'>
                    <ImageBlock
                        src={leftImage.src}
                        alt={leftImage.alt}
                        styleClass='w-[45%]'
                        customStyle={{
                            aspectRatio: '9/16',
                            objectFit: 'cover',
                        }}
                    />
                    <ImageBlock
                        src={rightImage.src}
                        alt={rightImage.alt}
                        styleClass='w-[45%]'
                        customStyle={{
                            aspectRatio: '9/16',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div className='w-full'>
                    <ProjectText title2={title2} paragraphs={paragraphs} />
                    <SurvivalSchool heading={survivalHeading} items={survivalItems} />
                </div>
            </div>

            <div className='hidden md:block h-full'>
                <ImageBlock
                    src={leftImage.src}
                    alt={leftImage.alt}
                    styleClass='absolute top-[10%] left-5'
                    customStyle={{
                        width: '23vw',
                        height: '54vh',
                        objectFit: 'cover',
                    }}
                />

                <ImageBlock
                    src={rightImage.src}
                    alt={rightImage.alt}
                    styleClass='absolute bottom-5 right-5'
                    customStyle={{
                        width: '23vw',
                        height: '54vh',
                        objectFit: 'cover',
                    }}
                />

                <ProjectText title2={title2} paragraphs={paragraphs} />
                <SurvivalSchool heading={survivalHeading} items={survivalItems} />
            </div>

            {/* Добавляем стили для анимации в глобальные стили */}
            <style jsx global>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default Block2