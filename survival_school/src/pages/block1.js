'use client';

import React from 'react';
import BackgroundOverlay from '../componetns/block1/BackgroundOverlay';
import CenteredText from '../componetns/block1/CenteredText';

const Block1 = ({ title, description }) => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/background_page1.png')" }}
        >
            <BackgroundOverlay>
                <CenteredText title={title} description={description} />
            </BackgroundOverlay>
        </div>
    );
};

export default Block1;