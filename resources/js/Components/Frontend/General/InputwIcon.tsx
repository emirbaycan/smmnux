import { InputHTMLAttributes } from "react";

function InputwIcon({ id = '', name = '', placeholder = '', type = '', children, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean }) {
    return (
        <div className='input-holder'>
            <div className='icon'>
                {children}
            </div>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className={
                    'input'
                }
                {...props}
            />
        </div>
    )
}

export default InputwIcon