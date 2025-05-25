import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import './InputwLabel.scss';

function InputwLabel({ id = '', name = '', title = '', hidden = false, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={'input-label-box ' + (hidden ? 'hidden' : '')}>
            <Label form={title} htmlFor={name}></Label>
            <input
                id={id}
                name={name}
                className='input'
                {...props}
            />
        </div>
    )
}

function Label({ form = '', htmlFor = '' }: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label className='label' htmlFor={htmlFor}>
            {form}
        </label>
    )
}

export default InputwLabel