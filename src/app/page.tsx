'use client';

import { useState } from 'react';
import React from 'react';
import { siteConfig } from '@/config/site';
import { Typewriter } from '@/components/typewriter';
import { Clock } from '@/components/clock';
import { TechIcon, IconName } from '@/components/tech-icons';

export default function Home() {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-fg selection:bg-surface">
      {/* Terminal Window */}
      <div className="w-full max-w-4xl bg-bg rounded-lg shadow-2xl border border-surface overflow-hidden">

        {/* Window Header */}
        <div className="bg-surface px-4 py-2 flex items-center justify-between">
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
        <div className="p-6 md:p-8 font-mono text-sm md:text-base">

          {/* Command Input */}
          <div className="mb-6">
            <span className="text-green">{siteConfig.terminal.user}</span>
            <span className="text-gray-400">@</span>
            <span className="text-mauve">{siteConfig.terminal.host}</span>
            {' '}
            <span className="text-blue">~</span>
            {' '}
            <span className="text-gray-400">&gt;</span>
            {' '}
            <Typewriter text="neofetch" onComplete={() => setShowOutput(true)} />
          </div>

          {/* Neofetch Output Layout */}
          <div
            className={`flex flex-col md:flex-row gap-8 transition-opacity duration-500 ${showOutput ? 'opacity-100' : 'opacity-0'
              }`}
          >

            {/* Left: ASCII Art (Arch Logo) */}
            <div className="hidden md:block text-arch font-bold ascii-art select-none pt-1">
              {siteConfig.asciiArt}
            </div>

            {/* Right: Info */}
            <div className="flex-1 space-y-1">
              <div className="grid grid-cols-[100px_1fr] gap-x-2">
                {siteConfig.systemInfo.map((info, index) => {
                  const colorClasses: Record<string, string> = {
                    arch: 'text-arch',
                    yellow: 'text-yellow',
                    green: 'text-green',
                    blue: 'text-blue',
                    red: 'text-red',
                    mauve: 'text-mauve',
                  };

                  return (
                    <React.Fragment key={index}>
                      <span className={`${colorClasses[info.color]} font-bold`}>
                        {info.label}
                      </span>
                      <span className={info.color === 'yellow' ? 'text-yellow' : ''}>
                        {info.value}
                      </span>
                    </React.Fragment>
                  );
                })}

                {/* Tech Stack With Icons */}
                <span className="text-arch font-bold mt-1 self-center">Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {siteConfig.techStack.map((tech) => {
                    const borderColorClasses: Record<string, string> = {
                      green: 'hover:border-green/30',
                      blue: 'hover:border-blue/30',
                      white: 'hover:border-white/30',
                      yellow: 'hover:border-yellow/30',
                      red: 'hover:border-red/30',
                      mauve: 'hover:border-mauve/30',
                    };

                    return (
                      <div
                        key={tech.name}
                        className={`tech-badge flex items-center gap-1.5 px-2 py-1 bg-surface rounded border border-transparent ${borderColorClasses[tech.color]} cursor-default`}
                      >
                        <TechIcon name={tech.icon as IconName} />
                        <span className="text-xs text-gray-200">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                <span className="text-arch font-bold mt-4">Timezone</span>
                <div className="mt-4">
                  <Clock />
                </div>

                <span className="text-arch font-bold mt-4">Motto</span>
                <span className="mt-4 italic text-mauve">{siteConfig.motto}</span>
              </div>

              {/* Color Palette Block */}
              <div className="flex gap-1 mt-6 pt-4">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
                <div className="w-4 h-4 bg-red rounded-sm"></div>
                <div className="w-4 h-4 bg-green rounded-sm"></div>
                <div className="w-4 h-4 bg-yellow rounded-sm"></div>
                <div className="w-4 h-4 bg-blue rounded-sm"></div>
                <div className="w-4 h-4 bg-mauve rounded-sm"></div>
                <div className="w-4 h-4 bg-arch rounded-sm"></div>
                <div className="w-4 h-4 bg-fg rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div
            className={`mt-8 pt-6 border-t border-surface transition-opacity duration-700 delay-200 ${showOutput ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="mb-2 text-gray-500"># Contact &amp; Socials (Active on GitHub/Twitter)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:bg-surface p-2 rounded transition"
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
