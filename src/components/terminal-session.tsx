'use client';

import { useCallback, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { ArchLogo } from '@/components/arch-logo';
import { Typewriter } from '@/components/typewriter';
import { Clock } from '@/components/clock';
import { ToolBadges } from '@/components/tool-badges';

const INFO_COLOR_CLASSES: Record<string, string> = {
  arch: 'text-arch',
  yellow: 'text-yellow',
  green: 'text-green',
  blue: 'text-blue',
  red: 'text-red',
  mauve: 'text-mauve',
};

export function TerminalSession() {
  const [showOutput, setShowOutput] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleTypewriterComplete = useCallback(() => setShowOutput(true), []);

  return (
    <>
      <div className="mb-6 md:mb-7">
        <span className="text-green">{siteConfig.terminal.user}</span>
        <span className="text-gray-400">@</span>
        <span className="text-mauve">{siteConfig.terminal.host}</span>
        {' '}
        <span className="text-blue">~</span>
        {' '}
        <span className="text-gray-400">&gt;</span>
        {' '}
        <Typewriter text="fastfetch" onComplete={handleTypewriterComplete} />
      </div>

      <div
        className={`flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 transition-opacity duration-500 ${
          showOutput ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ArchLogo targetRef={contentRef} active />

        <div ref={contentRef} className="min-w-0 flex-1">
          <div className="grid grid-cols-[minmax(72px,34%)_minmax(0,1fr)] gap-x-3 gap-y-2.5 sm:grid-cols-[104px_minmax(0,1fr)] md:gap-x-5 md:gap-y-3">
            {siteConfig.systemInfo.map((info) => (
              <div key={info.label} className="contents">
                <span className={`${INFO_COLOR_CLASSES[info.color]} font-bold tracking-tight`}>
                  {info.label}
                </span>
                <span className="leading-[1.5] text-fg break-words">{info.value}</span>
              </div>
            ))}

            <ToolBadges visible={showOutput} />

            <span className="text-arch font-bold tracking-tight">Timezone</span>
            <div className="flex items-baseline">
              <Clock />
            </div>

            <span className="text-arch font-bold tracking-tight">Motto</span>
            <span className="italic leading-relaxed text-mauve break-words">{siteConfig.motto}</span>
          </div>

          <div className="mt-6 inline-flex w-fit max-w-full flex-wrap gap-1.5 rounded-lg border border-white/5 p-2">
            <div className="h-4 w-4 rounded-sm bg-black" />
            <div className="h-4 w-4 rounded-sm bg-red" />
            <div className="h-4 w-4 rounded-sm bg-green" />
            <div className="h-4 w-4 rounded-sm bg-yellow" />
            <div className="h-4 w-4 rounded-sm bg-blue" />
            <div className="h-4 w-4 rounded-sm bg-mauve" />
            <div className="h-4 w-4 rounded-sm bg-arch" />
            <div className="h-4 w-4 rounded-sm bg-fg" />
          </div>
        </div>
      </div>

      <div
        className={`mt-8 border-t border-white/5 pt-6 transition-opacity duration-700 delay-200 ${
          showOutput ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mb-3 text-sm tracking-tight text-gray-500"># Contact &amp; Socials (Active on GitHub/X)</div>
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-8 md:gap-y-3">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-transparent px-2.5 py-2 transition-colors duration-200 hover:border-surfaceHighlight hover:bg-surface"
            >
              <span className="text-yellow">➜</span>
              <span className="w-16 shrink-0 text-gray-400">{link.label}</span>
              <span className="min-w-0 break-all group-hover:text-arch group-hover:underline decoration-arch">
                {link.display}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
