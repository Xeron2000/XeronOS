export const siteConfig = {
    // 终端信息
    terminal: {
        user: 'xeron',
        host: 'archlinux',
        distro: 'Arch Linux',
    },

    // 页面元数据
    metadata: {
        title: 'Xeron',
        description: 'Frontend Developer Portfolio - Flow with life',
    },

    // ASCII Art (Arch Logo)
    asciiArt: `       /\\
      /  \\
     /    \\
    /      \\
   /   ,,   \\
  /   |  |   \\
 /_-''    ''-_\\`,

    // 系统信息
    systemInfo: [
        { label: 'OS', value: 'Arch Linux x86_64', color: 'arch' },
        { label: 'Kernel', value: 'Linux 6.18.9-zen1-2-zen', color: 'arch' },
        { label: 'WM', value: 'Hyprland 0.53.3 (Wayland)', color: 'arch' },
        { label: 'Shell', value: 'fish 4.4.0', color: 'arch' },
        { label: 'Machine', value: 'Legion Y9000P IAH7H', color: 'arch' },
        { label: 'CPU', value: 'Intel Core i7-12700H', color: 'arch' },
    ],

    // 技术栈
    techStack: [
        {
            name: 'React',
            icon: 'react',
            color: 'blue',
        },
        {
            name: 'FastAPI',
            icon: 'fastapi',
            color: 'green',
        },
        {
            name: 'Claude Code',
            icon: 'claudeCode',
            color: 'yellow',
        },
    ],

    // 时区
    timezone: {
        label: 'Asia/Shanghai',
        display: '(Asia/Shanghai)',
    },

    // 座右铭
    motto: '𝑓𝑙𝑜𝑤 𝑤𝑖𝑡ℎ 𝑙𝑖𝑓𝑒 · 𝑒𝑥𝑝𝑒𝑐𝑡 𝑛𝑜𝑡ℎ𝑖𝑛𝑔',

    // 社交链接
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

    // 主题颜色
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
