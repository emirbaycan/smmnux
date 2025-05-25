import { ButtonHTMLAttributes } from 'react';

export default function InlineButton({ className = '', children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                'btn inline-btn ' + className
            }
        >
            {children}
        </button>
    );
}
