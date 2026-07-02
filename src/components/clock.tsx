'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function Clock() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: siteConfig.timezone.label,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const tick = () => {
      try {
        setTime(formatter.format(new Date()));
      } catch {
        setTime('Time Error');
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span id="clock" suppressHydrationWarning>{time}</span>
      <span className="text-gray-500 text-xs ml-2">{siteConfig.timezone.display}</span>
    </>
  );
}
