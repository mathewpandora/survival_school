// pages/Block5.jsx
import React from 'react';
import TopTitle from '../componetns/block5/TopTitle';
import BottomSignature from '../componetns/block5/BottomSignature';
import "../App.css";

const Block5 = ({block5Data}) => {
    return (
        <div className="w-full h-screen bg-[#0B1409] flex flex-col justify-between items-center">
            <TopTitle title={block5Data.topTitle} />
            <BottomSignature signature={block5Data.bottomSignature} />
        </div>
    );
};

export default Block5;
