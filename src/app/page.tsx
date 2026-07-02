import { siteConfig } from '@/config/site';
import { TerminalSession } from '@/components/terminal-session';

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-6 text-fg selection:bg-surface md:px-6 md:py-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-surface/70 bg-bg shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/5 bg-surface/95 px-4 py-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red" />
            <div className="w-3 h-3 rounded-full bg-yellow" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>
          <div className="text-xs text-gray-400">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}: ~
          </div>
          <div className="w-8" />
        </div>

        <div className="p-5 font-mono text-sm md:px-8 md:py-7 md:text-base">
          <TerminalSession />
        </div>
      </div>
    </div>
  );
}
