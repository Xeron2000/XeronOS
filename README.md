# 个人主页 - Next.js + Tailwind CSS

这是一个基于 Next.js 和 Tailwind CSS 的个人主页项目,采用终端风格设计,支持通过配置文件修改所有内容。

## 项目结构

```
app/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx        # 根布局
│   │   └── page.tsx          # 主页面
│   ├── components/
│   │   ├── clock.tsx         # 时钟组件
│   │   ├── tech-icons.tsx    # 技术栈图标
│   │   └── typewriter.tsx    # 打字机效果
│   └── config/
│       └── site.ts           # 站点配置文件 ⭐
├── package.json
└── ...
```

## 配置说明

所有页面内容都可以通过 `src/config/site.ts` 文件进行配置:

### 1. 终端信息
```typescript
terminal: {
  user: 'xeron',           // 用户名
  host: 'archlinux',       // 主机名
  distro: 'Arch Linux',    // 发行版
}
```

### 2. 页面元数据
```typescript
metadata: {
  title: 'Xeron | Flow with life',
  description: 'Frontend Developer Portfolio - Flow with life',
}
```

### 3. ASCII Art
```typescript
asciiArt: `       /\\
      /  \\
     /    \\
    /      \\
   /   ,,   \\
  /   |  |   \\
 /_-''    ''-_\\`
```

### 4. 系统信息
```typescript
systemInfo: [
  { label: 'OS', value: 'Arch Linux x86_64', color: 'arch' },
  { label: 'Host', value: 'Frontend Dev Workstation', color: 'arch' },
  // ... 更多信息
]
```

### 5. 技术栈
```typescript
techStack: [
  { name: 'Vue3', icon: 'vue', color: 'green' },
  { name: 'React', icon: 'react', color: 'blue' },
  // ... 更多技术
]
```

### 6. 社交链接
```typescript
socialLinks: [
  { label: 'Blog', url: 'https://040304.xyz', display: '040304.xyz' },
  { label: 'GitHub', url: 'https://github.com/Xeron2000', display: 'Xeron2000' },
  // ... 更多链接
]
```

### 7. 主题颜色
```typescript
colors: {
  bg: '#1e1e2e',
  fg: '#cdd6f4',
  arch: '#1793d1',
  // ... 更多颜色
}
```

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 自定义

1. 修改 `src/config/site.ts` 中的配置
2. 保存文件,开发服务器会自动热重载
3. 查看浏览器中的更新

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **包管理**: pnpm
- **字体**: JetBrains Mono

## 特性

- ✅ 完全可配置的内容
- ✅ 打字机效果
- ✅ 实时时钟
- ✅ 响应式设计
- ✅ 终端风格 UI
- ✅ 深色主题
- ✅ 技术栈图标展示
- ✅ 社交链接

## License

MIT
