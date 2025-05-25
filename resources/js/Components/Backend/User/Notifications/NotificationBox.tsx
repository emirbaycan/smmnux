import { PropsWithChildren } from "react";
import './NotificationBox.scss';

export default function NotificaitonBox({ head = '', desc = '', children}: PropsWithChildren & { head: string, desc: string }) {

    return (
        <div className="notification">
            <div className="inner">
                <div className="head">{head}</div>
                <div className="desc">{desc}</div>
            </div>
            {children}
        </div>
    )
}