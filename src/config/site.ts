export const siteConfig = {
    // 终端信息
    terminal: {
        user: 'xeron',
        host: 'archlinux',
        distro: 'Arch Linux',
    },

    // 页面元数据
    metadata: {
        title: 'Xeron | Flow with life',
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
        { label: 'Host', value: 'Frontend Dev Workstation', color: 'arch' },
        { label: 'Kernel', value: 'Linux 6.x-zen', color: 'arch' },
        { label: 'WM', value: 'Hyprland', color: 'arch' },
        { label: 'Shell', value: 'fish 3.7.0', color: 'arch' },
        { label: 'Identity', value: 'Active Frontend Developer', color: 'yellow' },
    ],

    // 技术栈
    techStack: [
        {
            name: 'Vue3',
            icon: 'vue',
            color: 'green',
        },
        {
            name: 'React',
            icon: 'react',
            color: 'blue',
        },
        {
            name: 'Next.js',
            icon: 'nextjs',
            color: 'white',
        },
        {
            name: 'TailwindCSS',
            icon: 'tailwind',
            color: 'blue',
        },
    ],

    // 时区
    timezone: {
        label: 'Asia/Shanghai',
        display: '(Asia/Shanghai)',
    },

    // 座右铭
    motto: '"Flow with life"',

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
            url: 'https://twitter.com/xeronflow',
            display: '@xeronflow',
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
