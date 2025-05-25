import { Dispatch, InputHTMLAttributes, PropsWithChildren, SetStateAction, createContext, useContext } from "react";
import './InputBox.scss'

const InputBox = ({ children }: PropsWithChildren) => {
    return (
        <div className='input-box'>
            {children}
        </div>
    )
}

const Icon = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className='icon'>{children}</div>
        </>
    );
};

const Input = ({ className = '', id = '', name = '', type = '', placeholder = '', onChange }: InputHTMLAttributes<HTMLInputElement> & { id: string, name: string, placeholder: string }) => {
    return (
        <>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={'input ' + className}
            />
        </>
    );
};

const Button = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="btn-holder">
                {children}
            </div>
        </>
    );
};

InputBox.Input = Input;
InputBox.Icon = Icon;
InputBox.Button = Button;

export default InputBox;