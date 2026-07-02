'use client';

import { useEffect, useRef, type RefObject } from 'react';

type Segment = {
  text: string;
  tone: 'primary' | 'secondary';
};

// Source: fastfetch-cli/fastfetch src/logo/ascii/a/arch.txt
const HORIZONTAL_SCALE = 0.86;
const BASE_FONT_SIZE = 10;

const ARCH_LOGO_RAW = [
  '                  -`',
  '                 .o+`',
  '                `ooo/',
  '               `+oooo:',
  '              `+oooooo:',
  '              -+oooooo+:',
  '            `/:-:++oooo+:',
  '           `/++++/+++++++:',
  '          `/++++++++++++++:',
  '         `/+++o$2oooooooo$1oooo/`',
  '        ./$2ooosssso++osssssso$1+`',
  '$2       .oossssso-````/ossssss+`',
  '      -osssssso.      :ssssssso.',
  '     :osssssss/        osssso+++.',
  '    /ossssssss/        +ssssooo/-',
  '  `/ossssso+/:-        -:/+osssso+-',
  ' `+sso+:-`                 `.-/+oso:',
  '`++:.                           `-/+/',
  '.                                 `/',
]
  .map((line) => line.trimEnd())
  .join('\n');

function parseFastfetchLogo(raw: string): Segment[][] {
  return raw.split('\n').map((line) => {
    const segments: Segment[] = [];
    let tone: Segment['tone'] = 'primary';
    let buffer = '';

    for (let index = 0; index < line.length; index += 1) {
      const marker = line[index + 1];

      if (line[index] === '$' && (marker === '1' || marker === '2')) {
        if (buffer) {
          segments.push({ text: buffer, tone });
          buffer = '';
        }

        tone = marker === '1' ? 'primary' : 'secondary';
        index += 1;
        continue;
      }

      buffer += line[index];
    }

    if (buffer) {
      segments.push({ text: buffer, tone });
    }

    return segments;
  });
}

const ARCH_LOGO_LINES = parseFastfetchLogo(ARCH_LOGO_RAW);

const TONE_CLASSES: Record<Segment['tone'], string> = {
  primary: 'text-arch',
  secondary: 'text-fg',
};

type ArchLogoProps = {
  targetRef: RefObject<HTMLElement | null>;
  active?: boolean;
};

function fitLogoHeight(logo: HTMLPreElement, targetHeight: number) {
  logo.style.fontSize = `${BASE_FONT_SIZE}px`;
  logo.style.lineHeight = '1.05';
  logo.style.marginTop = '0';
  logo.style.transform = 'none';
  logo.style.transformOrigin = 'top left';

  let fontSize = BASE_FONT_SIZE;
  let height = logo.getBoundingClientRect().height;

  if (height <= 0) return;

  fontSize = (targetHeight / height) * BASE_FONT_SIZE;
  logo.style.fontSize = `${fontSize}px`;

  for (let pass = 0; pass < 4; pass += 1) {
    height = logo.getBoundingClientRect().height;
    if (Math.abs(height - targetHeight) < 0.5) break;
    fontSize *= targetHeight / height;
    logo.style.fontSize = `${fontSize}px`;
  }
}

export function ArchLogo({ targetRef, active = true }: ArchLogoProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (!active) return;

    const target = targetRef.current;
    const logo = logoRef.current;
    const shell = shellRef.current;
    if (!target || !logo || !shell) return;

    let frame = 0;

    const syncSize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const targetHeight = target.offsetHeight;
        if (targetHeight <= 0) return;

        fitLogoHeight(logo, targetHeight);

        logo.style.transform = `scaleX(${HORIZONTAL_SCALE})`;
        logo.style.transformOrigin = 'top left';
        const { width } = logo.getBoundingClientRect();
        shell.style.height = `${targetHeight}px`;
        shell.style.width = `${width}px`;
        shell.style.overflow = 'hidden';
      });
    };

    syncSize();

    const observer = new ResizeObserver(syncSize);
    observer.observe(target);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [active, targetRef]);

  return (
    <div ref={shellRef} className="arch-logo-shell">
      <pre
        ref={logoRef}
        className="fastfetch-logo relative z-10 m-0 select-none font-bold leading-[1.05]"
        aria-label="Arch Linux"
        role="img"
      >
        {ARCH_LOGO_LINES.map((segments, lineIndex) => (
          <span key={lineIndex} className="arch-logo-line block whitespace-pre">
            {segments.map((segment, segmentIndex) => (
              <span key={segmentIndex} className={TONE_CLASSES[segment.tone]}>
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </pre>
    </div>
  );
}
