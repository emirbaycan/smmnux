import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

function TextareawLabel({ id = '', name = '', value = '', title = '', hidden = false, ...props }: InputHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className={'input-label-box ' + (hidden ? 'hidden' : '')}>
            <Label form={title} htmlFor={name}></Label>
            <textarea
                id={id}
                name={name}
                defaultValue={value}
                className='textarea'
                {...props}
            >
            </textarea>
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

export default TextareawLabel