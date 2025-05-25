import { useState, createContext, useContext, PropsWithChildren, Dispatch, SetStateAction, ButtonHTMLAttributes } from 'react';
import './Popup.scss';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { IoClose } from 'react-icons/io5';

const PopupContext = createContext<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleOpen: () => void;
}>({
    open: false,
    setOpen: () => { },
    toggleOpen: () => { },
});

const Popup = ({ open, setOpen, children }: PropsWithChildren & { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const toggleOpen = () => {
        setOpen((previousState: boolean) => !previousState);
    };

    return (
        <PopupContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className={"popup " + (open ? 'open' : '')}>
                <div className='bg' onClick={() => toggleOpen()}></div>
                <div className='inner'>
                    {children}
                </div>
            </div>
        </PopupContext.Provider>
    );
};

const Header = ({ children }: PropsWithChildren) => {
    const { toggleOpen } = useContext(PopupContext);

    return (
        <>
            <div className='head'>
                <div className='header'>{children}</div>
                <div className='close' onClick={toggleOpen}>
                    <IoClose></IoClose>
                </div>
            </div>
        </>
    );
};

const Content = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className='content'>
                {children}
            </div>
        </>
    );
};

const Actions = ({ children }: PropsWithChildren) => {
    return (
        <div
            className='actions'>
            {children}
        </div>
    );
};

const Action = ({ value = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <PrimaryButton
            value={value}
            className='btn'
            {...props}>
        </PrimaryButton>
    );
};

const Close = ({ value = '', children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { toggleOpen } = useContext(PopupContext);

    return (
        <SecondaryButton
            onClick={toggleOpen}
            value={value}
            className='btn' >
            {children}
        </SecondaryButton>
    );
};

Popup.Header = Header;
Popup.Content = Content;
Popup.Actions = Actions;
Popup.Action = Action;
Popup.Close = Close;

export default Popup;