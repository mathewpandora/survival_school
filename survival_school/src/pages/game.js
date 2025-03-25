'use client';
import React, { useState, useEffect } from 'react';

const DinoGame = () => {
    const groundLevel = 20;

    const [dinoBottom, setDinoBottom] = useState(groundLevel);
    const [isJumping, setIsJumping] = useState(false);
    const [obstacleLeft, setObstacleLeft] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const gravity = 5;
    const jumpHeight = 90;
    const jumpSpeed = 20;

    const dinoWidth = 80;
    const obstacleWidth = 40;
    const obstacleHeight = 40;

    useEffect(() => {
        if (isJumping && !gameOver) {
            const jumpInterval = setInterval(() => {
                setDinoBottom(prev => {
                    if (prev >= groundLevel + jumpHeight) {
                        clearInterval(jumpInterval);
                        setIsJumping(false);
                        return prev;
                    }
                    return prev + jumpSpeed;
                });
            }, 20);
            return () => clearInterval(jumpInterval);
        } else if (!isJumping && !gameOver) {
            const fallInterval = setInterval(() => {
                setDinoBottom(prev => {
                    if (prev <= groundLevel) {
                        clearInterval(fallInterval);
                        return groundLevel;
                    }
                    return prev - gravity;
                });
            }, 20);
            return () => clearInterval(fallInterval);
        }
    }, [isJumping, gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const obstacleInterval = setInterval(() => {
                setObstacleLeft(prev => {
                    if (prev < -obstacleWidth) {
                        setScore(prevScore => prevScore + 1);
                        return 1000;
                    }
                    return prev - 10;
                });
            }, 20);
            return () => clearInterval(obstacleInterval);
        }
    }, [gameOver]);

    useEffect(() => {
        const dinoRight = 50 + dinoWidth;
        const obstacleRight = obstacleLeft + obstacleWidth;

        if (
            dinoRight > obstacleLeft &&
            50 < obstacleRight &&
            dinoBottom < groundLevel + obstacleHeight
        ) {
            setGameOver(true);
        }
    }, [dinoBottom, obstacleLeft]);

    const jump = () => {
        if (dinoBottom === groundLevel && !gameOver) {
            setIsJumping(true);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === ' ' || e.key === 'ArrowUp') {
                jump();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [dinoBottom, gameOver]);

    const restartGame = () => {
        setGameOver(false);
        setDinoBottom(groundLevel);
        setObstacleLeft(1000);
        setScore(0);
    };

    return (
        <div
            className="relative w-full h-[400px] bg-[#0B1409] overflow-hidden"
            onClick={jump} // Клик для ПК
            onTouchStart={jump} // Тап для мобильных
        >
            <div className="absolute bottom-0 left-0 w-full h-20 bg-[#8B4513]"></div>

            <div className="absolute top-4 left-4 text-white text-2xl bg-black bg-opacity-50 px-4 py-2 rounded">
                Score: {score}
            </div>

            <img
                src="1741963447472.png"
                alt="dino"
                className="absolute w-[80px] h-[40px]"
                style={{ left: '50px', bottom: `${dinoBottom}px`, transform: 'scaleX(-1)' }}
            />

            <img
                src="IMAGE 2025-03-25 11:06:06.jpg"
                alt="obstacle"
                className="absolute w-[40px] h-[40px]"
                style={{
                    left: `${obstacleLeft}px`,
                    bottom: '20px',
                    transform: 'scaleX(-1)'
                }}
            />

            {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-white text-4xl mb-4">Game Over</h1>
                    <button
                        onClick={restartGame}
                        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                    >
                        Restart
                    </button>
                </div>
            )}
        </div>
    );
};

export default DinoGame;
