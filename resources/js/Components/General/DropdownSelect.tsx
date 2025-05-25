import { useState, createContext, useContext, PropsWithChildren, Dispatch, SetStateAction, InputHTMLAttributes, LiHTMLAttributes, HTMLAttributes, useRef } from 'react';
import './DropdownSelect.scss';

const DropdownSelectContext = createContext<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    val: string | number;
    setVal: Dispatch<SetStateAction<number>>;
    header: string;
    setHeader: Dispatch<SetStateAction<string>>;
    toggleOpen: () => void;
    callback: Dispatch<SetStateAction<number>>;
}>({
    open: false,
    setOpen: () => { },
    val: 0,
    setVal: () => { },
    header: '',
    setHeader: () => { },
    toggleOpen: () => { },
    callback: () => { }
});

const DropdownSelect = ({ children, className = '', callback = () => { } }: PropsWithChildren & HTMLAttributes<HTMLDivElement> & { callback: Dispatch<SetStateAction<number>> }) => {
    const [open, setOpen] = useState(false);
    const [val, setVal] = useState(0);
    const [header, setHeader] = useState('');
    const catMenu = useRef<HTMLDivElement>(null)

    const closeOpenMenus = (e: any) => {
        if (open && catMenu.current && !catMenu.current.contains(e.target)) {
            setOpen(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropdownSelectContext.Provider value={{ open, setOpen, val, setVal, header, setHeader, toggleOpen, callback }}>
            <div className={"dropdown-select " + (className && className)} data-value={val} ref={catMenu}>{children}</div>
        </DropdownSelectContext.Provider>
    );
};

const HeaderHolder = ({ children }: PropsWithChildren) => {
    const { toggleOpen } = useContext(DropdownSelectContext);

    return (
        <>
            <div onClick={toggleOpen} className='dropdown-header-holder'>{children}</div>
        </>
    );
};

const Header = ({ children }: PropsWithChildren) => {
    const { header, toggleOpen } = useContext(DropdownSelectContext);

    return (
        <>
            <div className='dropdown-header'>{header ? header : children}</div>
        </>
    );
};

const Items = ({ children }: PropsWithChildren) => {
    const { open } = useContext(DropdownSelectContext);

    return (
        <ul
            className={'dropdown-items ' + (open ? 'show' : 'hidden')} >
            {children}
        </ul>
    );
};

const Item = ({ index = 0, value = '', disabled = false, onClick, children, ...props }: PropsWithChildren & InputHTMLAttributes<HTMLLIElement> & { index: number, value: number | string }) => {
    const { val, setVal, setHeader, toggleOpen, callback } = useContext(DropdownSelectContext);
    return (
        <li
            onClick={(event) => { !disabled && (toggleOpen(), setVal(index), setHeader(event.currentTarget.innerHTML), onClick && onClick(event), callback(index)) }}
            value={value}
            key={index}
            className={'dropdown-item ' + (disabled ? 'disabled' : '') + (val == index ? 'selected' : '')}
            {...props}>
            {children}
        </li>
    );
};

DropdownSelect.HeaderHolder = HeaderHolder;
DropdownSelect.Header = Header;
DropdownSelect.Items = Items;
DropdownSelect.Item = Item;

export default DropdownSelect;