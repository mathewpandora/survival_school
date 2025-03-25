import React from "react";

const BackgroundOverlay = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-[#C9C9C9] relative">
            <div
                className="relative w-full max-w-[1200px] h-full flex items-center justify-center p-4"
                style={{
                    background: 'radial-gradient(circle, rgba(110, 127, 96, 1) 0%, rgba(110, 127, 96, 0) 50%)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default BackgroundOverlay;