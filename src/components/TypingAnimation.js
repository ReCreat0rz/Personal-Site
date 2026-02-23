'use client';

import { useState, useEffect } from 'react';

const TypingAnimation = ({ 
    words, 
    typingSpeed = 100, 
    deletingSpeed = 50, 
    pauseTime = 2000, 
    loop = true, 
    onComplete = null,
    showCursor = true 
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isComplete && !loop) return;

        const handleTyping = () => {
            const currentFullWord = words[currentWordIndex];
            
            if (isDeleting) {
                // Backspacing
                setCurrentText(prev => prev.slice(0, -1));
                
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            } else {
                // Typing
                const nextText = currentFullWord.slice(0, currentText.length + 1);
                setCurrentText(nextText);
                
                if (nextText === currentFullWord) {
                    if (!loop && currentWordIndex === words.length - 1) {
                        setIsComplete(true);
                        if (onComplete) onComplete();
                        return;
                    }
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop, onComplete, isComplete]);

    return (
        <span className="typing-text">
            {currentText}
            {showCursor && (!isComplete || loop) && <span className="cursor">|</span>}
            <style jsx>{`
                .cursor {
                    animation: blink 0.7s infinite;
                    margin-left: 2px;
                    color: var(--primary-color);
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    );
};

export default TypingAnimation;
