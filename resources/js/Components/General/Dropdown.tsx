import { useState, createContext, useContext, PropsWithChildren, Dispatch, SetStateAction, useRef } from 'react';
import './Dropdown.scss';

const DropDownContext = createContext<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleOpen: () => void;
}>({
    open: false,
    setOpen: () => {},
    toggleOpen: () => {},
});

const Dropdown = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);
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
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="dropdown" ref={catMenu}>{children}</div>
        </DropDownContext.Provider>
    );
};

const Header = ({ children }: PropsWithChildren) => {
    const { toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen} className='dropdown-header'>{children}</div>
        </>
    );
};

const Items = ({children}: PropsWithChildren) => {    
    const { open } = useContext(DropDownContext);
    return (
        <ul 
        className={'dropdown-items ' + (open?'show':'hidden')} >
            {children}
        </ul>
    );
};

const Item = ({index=0, children}: PropsWithChildren & {index:number}) => {
    return (
        <li 
        key={index} 
        className='dropdown-item' >
            {children}
        </li>
    );
};

Dropdown.Header = Header;
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;