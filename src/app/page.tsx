'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import React from 'react';
import { siteConfig } from '@/config/site';
import { Typewriter } from '@/components/typewriter';
import { Clock } from '@/components/clock';

const ToolBadges = dynamic(
  () => import('@/components/tool-badges').then((mod) => ({ default: mod.ToolBadges })),
  { ssr: false },
);

const ArchLogo = dynamic(
  () => import('@/components/arch-logo').then((mod) => ({ default: mod.ArchLogo })),
  { ssr: false },
);

const INFO_COLOR_CLASSES: Record<string, string> = {
  arch: 'text-arch',
  yellow: 'text-yellow',
  green: 'text-green',
  blue: 'text-blue',
  red: 'text-red',
  mauve: 'text-mauve',
};

export default function Home() {
  const [showOutput, setShowOutput] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-6 text-fg selection:bg-surface md:px-6 md:py-8">
      {/* Terminal Window */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-surface/70 bg-bg shadow-[0_24px_80px_rgba(0,0,0,0.45)]">

        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-white/5 bg-surface/95 px-4 py-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red"></div>
            <div className="w-3 h-3 rounded-full bg-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-green"></div>
          </div>
          <div className="text-xs text-gray-400">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}: ~
          </div>
          <div className="w-8"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-sm md:px-8 md:py-7 md:text-base">

          {/* Command Input */}
          <div className="mb-6 md:mb-7">
            <span className="text-green">{siteConfig.terminal.user}</span>
            <span className="text-gray-400">@</span>
            <span className="text-mauve">{siteConfig.terminal.host}</span>
            {' '}
            <span className="text-blue">~</span>
            {' '}
            <span className="text-gray-400">&gt;</span>
            {' '}
            <Typewriter text="fastfetch" onComplete={() => setShowOutput(true)} />
          </div>

          {/* Fastfetch Output Layout */}
          <div
            className={`flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 transition-opacity duration-500 ${showOutput ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <ArchLogo targetRef={contentRef} active={showOutput} />

            {/* Right: Info */}
            <div ref={contentRef} className="min-w-0 flex-1">
              <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-x-3 gap-y-2.5 md:gap-x-5 md:gap-y-3">
                {siteConfig.systemInfo.map((info, index) => (
                  <React.Fragment key={info.label}>
                    <span className={`${INFO_COLOR_CLASSES[info.color]} font-bold tracking-tight`}>
                      {info.label}
                    </span>
                    <span className="leading-[1.5] text-fg">{info.value}</span>
                  </React.Fragment>
                ))}

                <ToolBadges visible={showOutput} />

                <span className="text-arch font-bold tracking-tight">Timezone</span>
                <div className="flex items-baseline">
                  <Clock />
                </div>

                <span className="text-arch font-bold tracking-tight">Motto</span>
                <span className="italic leading-relaxed text-mauve">{siteConfig.motto}</span>
              </div>

              {/* Color Palette Block */}
              <div className="mt-6 inline-flex w-fit gap-1.5 rounded-lg border border-white/5 p-2">
                <div className="h-4 w-4 rounded-sm bg-black"></div>
                <div className="h-4 w-4 rounded-sm bg-red"></div>
                <div className="h-4 w-4 rounded-sm bg-green"></div>
                <div className="h-4 w-4 rounded-sm bg-yellow"></div>
                <div className="h-4 w-4 rounded-sm bg-blue"></div>
                <div className="h-4 w-4 rounded-sm bg-mauve"></div>
                <div className="h-4 w-4 rounded-sm bg-arch"></div>
                <div className="h-4 w-4 rounded-sm bg-fg"></div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div
            className={`mt-8 border-t border-white/5 pt-6 transition-opacity duration-700 delay-200 ${showOutput ? 'opacity-100' : 'opacity-0'
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
                  <span className="text-gray-400 w-16">{link.label}</span>
                  <span className="group-hover:text-arch group-hover:underline decoration-arch">
                    {link.display}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
