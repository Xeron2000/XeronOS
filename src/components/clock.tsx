'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function Clock() {
    const [time, setTime] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: siteConfig.timezone.label,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };

            try {
                const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
                setTime(timeString);
            } catch (e) {
                setTime('Time Error');
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return (
            <>
                <span id="clock">00:00:00</span>
                <span className="text-gray-500 text-xs ml-2">{siteConfig.timezone.display}</span>
            </>
        );
    }

    return (
        <>
            <span id="clock">{time}</span>
            <span className="text-gray-500 text-xs ml-2">{siteConfig.timezone.display}</span>
        </>
    );
}
