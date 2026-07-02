'use client';

import { siteConfig } from '@/config/site';
import { TechIcon, type IconName } from '@/components/tech-icons';

const BORDER_COLOR_CLASSES: Record<string, string> = {
  green: 'hover:border-green/30 hover:shadow-[0_0_18px_rgba(166,227,161,0.1)]',
  blue: 'hover:border-blue/30 hover:shadow-[0_0_18px_rgba(137,180,250,0.1)]',
  mauve: 'hover:border-mauve/30 hover:shadow-[0_0_18px_rgba(203,166,247,0.1)]',
  yellow: 'hover:border-yellow/30 hover:shadow-[0_0_18px_rgba(249,226,175,0.1)]',
  red: 'hover:border-red/30 hover:shadow-[0_0_18px_rgba(243,139,168,0.1)]',
  white: 'hover:border-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]',
};

type ToolBadgesProps = {
  visible: boolean;
};

export function ToolBadges({ visible }: ToolBadgesProps) {
  return (
    <>
      <span className="self-start text-arch font-bold tracking-tight">Tools</span>
      <div className="flex flex-wrap gap-2" data-badges-visible={visible || undefined}>
        {siteConfig.devTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${tool.name}`}
            className={`tool-badge group relative flex items-center gap-1.5 overflow-hidden rounded-md border border-white/8 bg-surface/90 px-2.5 py-1.5 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${BORDER_COLOR_CLASSES[tool.color]} cursor-pointer`}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 52%, rgba(255,255,255,0.03) 100%)',
              }}
            />
            <TechIcon name={tool.icon as IconName} />
            <span className="relative text-xs text-gray-200 transition-colors duration-200 group-hover:text-fg">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
