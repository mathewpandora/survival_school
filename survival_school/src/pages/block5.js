'use client';
import "../App.css";
import React from 'react';

const Block5 = () => {
    return (
        <div
            className="w-full h-screen bg-[#0B1409] flex flex-col justify-between items-center"
        >
            {/* Заголовок сверху */}
            <div
                className="mt-10 text-white text-center uppercase"
                style={{
                    fontFamily: 'Kharkiv Tone',
                    fontWeight: 400,
                    fontSize: '60px',
                    lineHeight: '122%',
                    letterSpacing: '0%'
                }}
            >
                НАЗАД ДОРОГИ НЕТ
            </div>

            {/* Подпись снизу */}
            <div
                className="mb-10 text-white text-center"
                style={{
                    fontFamily: 'Kharkiv Tone',
                    fontWeight: 400,
                    fontSize: '38.41px',
                    lineHeight: '122%',
                    letterSpacing: '0%'
                }}
            >
                © ШКОЛА ВЫЖИВАНИЯ 2025
            </div>
        </div>
    );
};

export default Block5;
