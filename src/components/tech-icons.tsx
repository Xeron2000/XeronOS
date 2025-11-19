export function VueIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
            <path d="M7.5 4L16 18.5L24.5 4H19.5L16 10.5L12.5 4H7.5Z" fill="#35495E" />
        </svg>
    );
}

export function ReactIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#61DAFB" strokeWidth="1.5" strokeOpacity="0.4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        </svg>
    );
}

export function NextJsIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM10.996 16.803L8 12.826V8.4H9.333V11.668L11.662 14.758C11.771 14.803 11.885 14.845 12 14.883V16.938C11.652 16.917 11.317 16.87 10.996 16.803ZM13.333 16.867V16.667L10.242 12.567L14.947 7.422C15.403 7.787 15.812 8.208 16.165 8.677L13.333 11.776V16.867Z" fill="white" />
        </svg>
    );
}

export function TailwindIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.39995 12.6001C6.39995 10.9999 7.59995 8.5999 10.8 8.5999C11.6 8.5999 12.2 9.1999 12.4 9.3999C12.6 9.5999 12.6 9.7999 12.6 9.7999C12.6 9.7999 12.6 9.7999 12.6 9.7999C12.6 12.3999 10.2 13.3999 9.39995 13.3999C9.19995 13.3999 8.99995 13.3999 8.79995 13.1999C8.99995 14.1999 9.99995 14.9999 11.4 14.9999C12 14.9999 12.6 14.7999 13 14.3999C12.8 15.3999 12 16.1999 10.6 16.1999C8.19995 16.1999 6.39995 14.1999 6.39995 12.6001ZM12.9 12.6001C12.9 10.9999 14.1 8.5999 17.3 8.5999C18.1 8.5999 18.7 9.1999 18.9 9.3999C19.1 9.5999 19.1 9.7999 19.1 9.7999C19.1 9.7999 19.1 9.7999 19.1 9.7999C19.1 12.3999 16.7 13.3999 15.9 13.3999C15.7 13.3999 15.5 13.3999 15.3 13.1999C15.5 14.1999 16.5 14.9999 17.9 14.9999C18.5 14.9999 19.1 14.7999 19.5 14.3999C19.3 15.3999 18.5 16.1999 17.1 16.1999C14.7 16.1999 12.9 14.1999 12.9 12.6001Z" fill="#38BDF8" />
        </svg>
    );
}

const iconMap = {
    vue: VueIcon,
    react: ReactIcon,
    nextjs: NextJsIcon,
    tailwind: TailwindIcon,
};

export type IconName = keyof typeof iconMap;

export function TechIcon({ name }: { name: IconName }) {
    const Icon = iconMap[name];
    return <Icon />;
}
