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
        <div className='w-full min-h-screen relative bg-[#010f01] overflow-auto pb-10 lg:pb-0'>
            {/* SVG с анимацией вращения (только на lg и выше) */}
            <div className='hidden lg:block absolute right-10 md:bottom-6 lg:bottom-2 lg:right-60 z-10'>
                <img
                    src="Linked Path Group.svg"
                    alt="Декоративный элемент"
                    className='w-13 h-13 lg:w-60 lg:h-60 animate-spin-slow'
                />
            </div>

            <div className='lg:hidden flex flex-col items-center'>
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

                <div className='w-full flex flex-col space-y-10'>
                    <ProjectText title2={title2} paragraphs={paragraphs} />
                    <SurvivalSchool heading={survivalHeading} items={survivalItems} />
                </div>
            </div>

            <div className='hidden lg:block h-full'>
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

                <div className='w-full flex flex-col space-y-10'>
                    <ProjectText title2={title2} paragraphs={paragraphs} />
                    <SurvivalSchool heading={survivalHeading} items={survivalItems} />
                </div>
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
