export const siteConfig = {
    // Terminal info
    terminal: {
        user: 'xeron',
        host: 'archlinux',
        distro: 'Arch Linux',
    },

    // Page metadata
    metadata: {
        title: 'Xeron',
        description: 'Frontend Developer Portfolio - Flow with life',
    },

    // System info — synced from `fastfetch`
    systemInfo: [
        { label: 'OS', value: 'Arch Linux x86_64', color: 'arch' },
        { label: 'Kernel', value: 'Linux 7.0.14-zen1-1-zen', color: 'arch' },
        { label: 'WM', value: 'niri 26.04 (Wayland)', color: 'arch' },
        { label: 'Shell', value: 'fish 4.7.1', color: 'arch' },
        { label: 'Machine', value: '82RF (Legion Y9000P IAH7H)', color: 'arch' },
        { label: 'CPU', value: '12th Gen i7-12700H (12+8) @ 4.70 GHz', color: 'arch' },
    ],

    // Dev tools
    devTools: [
        {
            name: 'Pi Coding Agent',
            icon: 'pi',
            color: 'mauve',
            url: 'https://pi.dev/',
        },
        {
            name: 'OpenCode',
            icon: 'opencode',
            color: 'green',
            url: 'https://opencode.ai/',
        },
        {
            name: 'Cursor CLI',
            icon: 'cursorCli',
            color: 'blue',
            url: 'https://cursor.com/cli',
        },
    ],

    // Timezone
    timezone: {
        label: 'Asia/Shanghai',
        display: '(Asia/Shanghai)',
    },

    // Motto
    motto: '𝑓𝑙𝑜𝑤 𝑤𝑖𝑡ℎ 𝑙𝑖𝑓𝑒 · 𝑒𝑥𝑝𝑒𝑐𝑡 𝑛𝑜𝑡ℎ𝑖𝑛𝑔',

    // Social links
    socialLinks: [
        {
            label: 'Blog',
            url: 'https://blog.040304.xyz',
            display: 'blog.040304.xyz',
        },
        {
            label: 'GitHub',
            url: 'https://github.com/Xeron2000',
            display: 'Xeron2000',
        },
        {
            label: 'Twitter',
            url: 'https://x.com/xeron688',
            display: '@xeron688',
        },
        {
            label: 'Email',
            url: 'mailto:xeron2333@gmail.com',
            display: 'xeron2333@gmail.com',
        },
    ],

    // Theme colors
    colors: {
        bg: '#1e1e2e',
        fg: '#cdd6f4',
        arch: '#1793d1',
        green: '#a6e3a1',
        yellow: '#f9e2af',
        blue: '#89b4fa',
        red: '#f38ba8',
        mauve: '#cba6f7',
        surface: '#313244',
        surfaceHighlight: '#45475a',
    },
} as const;

export type SiteConfig = typeof siteConfig;
