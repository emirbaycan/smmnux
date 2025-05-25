import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={'btn primary-btn' + (className && ' ' + className)}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
