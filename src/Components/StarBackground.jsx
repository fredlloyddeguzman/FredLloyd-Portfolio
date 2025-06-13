import React, { useEffect, useState } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 3 + 2,
                animationDelay: Math.random() * 3,
            });
        }
        setStars(newStars);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <style>
                {`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 1; }
                    }
                `}
            </style>

            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
                        animationDelay: `${star.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    );
};









/* import React, { useState, useEffect } from 'react';

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
        useEffect(() => {
        generateStars();
        },[]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, 
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars);

    };
    return  (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={stars.id} className="star animate-pulse-subtle" style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top: star.y + '%',
                opacity: star.opacity,
                animationDuration: animationDuration + 's',
            }}/>
        ))}
 
    </div>
);
}; */