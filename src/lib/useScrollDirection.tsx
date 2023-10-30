'use client';
import { useState, useEffect } from 'react';

export default function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState('');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currScrollY = window.scrollY;
            const direction = currScrollY > lastScrollY ? 'down' : 'up';

            if (direction !== scrollDir && (currScrollY - lastScrollY > 10 ||
                currScrollY - lastScrollY < -10)) {
                setScrollDir(direction);
            }
            lastScrollY = currScrollY > 0 ? currScrollY : 0;
        }
        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        }
    }, [scrollDir]);

    return scrollDir;
}