import React from "react";

const BackgroundOverlay = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center px-4 text-[#C9C9C9] relative">
            <div className="relative inline-block w-[150vw] h-[200vh] rounded-full"
                 style={{
                     background: 'radial-gradient(circle, rgba(110, 127, 96, 1) 0%, rgba(110, 127, 96, 0) 40%)',
                 }}>
                {children}
            </div>
        </div>
    );
};

export default BackgroundOverlay;