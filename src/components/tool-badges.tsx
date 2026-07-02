'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteConfig } from '@/config/site';
import { TechIcon, type IconName } from '@/components/tech-icons';

gsap.registerPlugin(useGSAP);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!visible || !containerRef.current) return;

      const badges = gsap.utils.toArray<HTMLElement>('.tool-badge', containerRef.current);
      if (badges.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(badges, { clearProps: 'all', opacity: 1 });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(badges, {
          opacity: 0,
          y: 12,
          scale: 0.92,
          duration: 0.42,
          stagger: 0.07,
          ease: 'power3.out',
          delay: 0.08,
        });

        const cleanups: Array<() => void> = [];

        badges.forEach((badge) => {
          const onEnter = () => {
            gsap.to(badge, {
              y: -2,
              scale: 1.03,
              duration: 0.2,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };
          const onLeave = () => {
            gsap.to(badge, {
              y: 0,
              scale: 1,
              duration: 0.26,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };
          const onDown = () => {
            gsap.to(badge, {
              scale: 0.97,
              duration: 0.1,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };
          const onUp = () => {
            gsap.to(badge, {
              scale: 1.03,
              duration: 0.12,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          };

          badge.addEventListener('mouseenter', onEnter);
          badge.addEventListener('mouseleave', onLeave);
          badge.addEventListener('mousedown', onDown);
          badge.addEventListener('mouseup', onUp);

          cleanups.push(() => {
            badge.removeEventListener('mouseenter', onEnter);
            badge.removeEventListener('mouseleave', onLeave);
            badge.removeEventListener('mousedown', onDown);
            badge.removeEventListener('mouseup', onUp);
          });
        });

        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [visible], revertOnUpdate: true },
  );

  return (
    <>
      <span className="self-start text-arch font-bold tracking-tight">Tools</span>
      <div ref={containerRef} className="flex flex-wrap gap-2">
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
