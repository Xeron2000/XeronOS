'use client';

import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function Typewriter({ text, speed = 150, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const hasPlayedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasPlayedRef.current) {
      return;
    }

    hasPlayedRef.current = true;

    let timer: ReturnType<typeof setInterval> | undefined;
    const startFrame = requestAnimationFrame(() => {
      setDisplayText('');
      setShowCursor(true);

      let index = 0;
      let built = '';
      timer = setInterval(() => {
        if (index < text.length) {
          built += text[index];
          index += 1;
          setDisplayText(built);
          return;
        }

        clearInterval(timer);
        setShowCursor(false);
        onCompleteRef.current?.();
      }, speed);
    });

    return () => {
      cancelAnimationFrame(startFrame);
      if (timer) clearInterval(timer);
    };
  }, [text, speed]);

  return (
    <span>
      <span className="text-fg" suppressHydrationWarning>{displayText}</span>
      <span
        className={`inline-block align-middle ml-1 w-2 h-5 bg-fg ${
          showCursor ? 'cursor-blink' : 'opacity-0'
        }`}
      />
    </span>
  );
}
