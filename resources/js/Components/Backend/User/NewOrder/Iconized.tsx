import { PropsWithChildren } from "react";
import './Iconized.scss'
export default function Iconized({ id = '', head = '', desc = '', children }: PropsWithChildren & { id?: string, head: string, desc: string | number }) {

    return (
        <div className="iconized">
            <div className="inner">
                <div className="head">{head}</div>
                <div className="desc" id={id}>{desc}</div>
            </div>
            {children}
        </div>
    )
}