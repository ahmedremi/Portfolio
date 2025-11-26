import { useState, useEffect } from 'react';

export const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        let timeout;

        if (!isDeleting && displayText === currentText) {
            // Pause at end of word
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayText === '') {
            // Move to next text
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
            // Type or delete character
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            timeout = setTimeout(() => {
                setDisplayText((prev) =>
                    isDeleting
                        ? prev.slice(0, -1)
                        : currentText.slice(0, prev.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
};
