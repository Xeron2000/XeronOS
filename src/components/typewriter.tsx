'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

export function Typewriter({ text, speed = 150, onComplete }: TypewriterProps) {
    const [displayText, setDisplayText] = useState(text);
    const [showCursor, setShowCursor] = useState(false);
    const [mounted, setMounted] = useState(false);
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        setMounted(true);

        // 如果已经播放过，就不再播放
        if (hasPlayedRef.current) {
            return;
        }

        hasPlayedRef.current = true;
        setDisplayText('');
        setShowCursor(true);

        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
                setShowCursor(false);
                onComplete?.();
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, onComplete]);

    if (!mounted) {
        return (
            <span>
                <span className="text-fg">{text}</span>
                <span className="inline-block align-middle ml-1 w-2 h-5 bg-fg opacity-0" />
            </span>
        );
    }

    return (
        <span>
            <span className="text-fg">{displayText}</span>
            <span
                className={`inline-block align-middle ml-1 w-2 h-5 bg-fg ${showCursor ? 'cursor-blink' : 'opacity-0'
                    }`}
            />
        </span>
    );
}
