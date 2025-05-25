import { InputHTMLAttributes } from "react";

function CheckBox({ title = '', name = '', checked = false, onClick, onChange }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean }) {
    return (
        <div className='checkbox' onClick={onClick}>

            <label className='checkbox-label'>
                {title}
                <input
                    onChange={onChange}
                    checked={checked}
                    type='checkbox'
                    name={name}
                    className={
                        'checkbox-input'
                    }
                />
            </label>
        </div>
    )
}
export default CheckBox