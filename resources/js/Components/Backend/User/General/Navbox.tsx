import { Tooltip } from "devextreme-react";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"
import './Navbox.scss'

const NavboxContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
    callback: Dispatch<SetStateAction<number>>;
}>({
    open: 0,
    setOpen: () => { },
    callback: () => { }
});

const Navbox = ({ children, callback = () => { } }: PropsWithChildren & { callback: Dispatch<SetStateAction<number>> }) => {
    const [open, setOpen] = useState(0);

    return (
        <NavboxContext.Provider value={{ open, setOpen, callback }}>
            <div className="navbox">{children}</div>
        </NavboxContext.Provider>
    );
};

function Navs({ children }: PropsWithChildren) {
    return (
        <div className="navs">
            {children}
        </div>
    )
}

function Nav({ index = 0, label, children }: PropsWithChildren & { index: number, label: string }) {
    const { open, setOpen, callback } = useContext(NavboxContext);

    return (
        <div className={"nav " + (open === index ? 'open' : '')} onClick={() => { setOpen(index); callback(index) }}>
            {children}
            {label ? (<div className="nav-text">{label}</div>) : ''}
        </div>
    )
}

function TooltipNav({ index = 0, id = '', label = '', children }: PropsWithChildren & { index: number, id: string, label: string }) {
    const { open, setOpen } = useContext(NavboxContext);

    return (
        <div id={id} className={"nav " + (open === index ? 'open' : '')} onClick={() => { setOpen(index) }}>
            {children}
            {label ? (<div className="nav-text">{label}</div>) : ''}
            <Tooltip
                target={"#" + id}
                showEvent="dxhoverstart"
                hideEvent="dxhoverend"
            >{label}</Tooltip>
        </div>
    )
}

function Contents({ children }: PropsWithChildren) {
    return (
        <div className="contents">
            {children}
        </div>
    )
}

function Content({ index = 0, children }: PropsWithChildren & { index: number }) {
    const { open } = useContext(NavboxContext);

    return (
        <div className={"content " + (open === index ? 'show' : 'hidden')}>
            {children}
        </div>
    )
}

Navbox.Navs = Navs;
Navbox.Nav = Nav;
Navbox.TooltipNav = TooltipNav;
Navbox.Contents = Contents;
Navbox.Content = Content;

export default Navbox;