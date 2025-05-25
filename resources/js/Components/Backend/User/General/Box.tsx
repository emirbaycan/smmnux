import { HtmlHTMLAttributes, PropsWithChildren } from "react"
import { IoIosInformationCircle } from "react-icons/io"
import './Box.scss'

export function BoxText({ children }: PropsWithChildren) {
    return (
        <p className='text'>
            {children}
        </p>
    )
}

export function BoxHeader({ children }: PropsWithChildren) {
    return (
        <h2 className='header'>
            {children}
        </h2>
    )
}

export function Box({ className = '', children, ...props }: PropsWithChildren & HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <div className={'box' + (className && ' ' + className)} {...props}>
            {children}
        </div>
    )
}

export function Boxes({ children }: PropsWithChildren) {
    return (
        <div className='boxes'>
            {children}
        </div>
    )
}

export function BoxesCol({ children }: PropsWithChildren) {
    return (
        <div className='boxes-col'>
            {children}
        </div>
    )
}

export function BoxTextInfo({ children }: PropsWithChildren) {
    return (
        <p className='text text-info'>
            <IoIosInformationCircle></IoIosInformationCircle>
            {children}
        </p>
    )
}
