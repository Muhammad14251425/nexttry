'use client'
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CubeTextAnimation = () => {
    const [currentFace, setCurrentFace] = useState(0);
    const texts = [
        "Welcome to 3<span class='text-red-500'>U</span>Logistics",
        "Facing Challenges in Transporting Your Loads?",
        "Let Us Make It Effortless for You!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFace((prevFace) => (prevFace + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="relative w-96 h-48 overflow-hidden flex justify-center items-center bg-white">
            <AnimatePresence>
                <motion.div
                    key={currentFace} // Use key to force remounting
                    initial={{ y: "300%", opacity: 0 }} // Start from below
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-300%', opacity: 0 }}
                    transition={{ duration: 1 }} // Adjust the duration to match your needs
                    className={`absolute ${currentFace === 1 || currentFace === 2 ? "text-4xl" : "text-6xl"} font-bold`}
                    dangerouslySetInnerHTML={{ __html: texts[currentFace] }}
                />
            </AnimatePresence>
        </div>
    );
};

export default CubeTextAnimation;
