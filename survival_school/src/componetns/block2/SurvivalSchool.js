import React from 'react';

const SurvivalSchool = ({ heading, items }) => {
    return (
        <div className="relative lg:absolute top-[40%] lg:left-[calc(23vw+20px)] inline-block text-[#C9C9C9] px-[5%]">
            <p
                className="text-left lg:text-[38.28px] text-[24px]"

                style={{
                    // fontFamily: 'Kharkiv Tone',  // добавляем шрифт
                    fontWeight: 400,
                    // fontSize: '38.28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',  // или '0' — по сути одно и то же
                    textTransform: 'uppercase',
                    color: '#C9C9C9',
                }}
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            <ul
                className="text-left mt-5 list-disc list-inside lg:text-[18px] text-[16px]"
                style={{
                    fontWeight: 400,
                    // fontSize: '19.53px',
                    lineHeight: '25px',
                    letterSpacing: '0',
                    color: '#C9C9C9',
                    wordBreak: 'break-word',
                }}
            >
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SurvivalSchool;