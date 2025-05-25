import { useState, createContext, useContext, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import './Faqs.scss';
import { BiMinus, BiPlus } from 'react-icons/bi';

const FaqsContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 0,
    setOpen: () => { },
});

const Faqs = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(0);

    return (
        <FaqsContext.Provider value={{ open, setOpen }}>
            <div className="faqs">{children}</div>
        </FaqsContext.Provider>
    );
};

const Item = ({ head = '', desc = '', index = 0 }: { head: string | undefined, desc: string | undefined, index: number }) => {
    const { open, setOpen } = useContext(FaqsContext);
    var isOpen = (open == index ? true : false);
    return (
        <li
            key={index}
            className={'item ' + (isOpen ? 'show' : '')}
            onClick={() => setOpen(index)}
        >
            <div className='head-holder'>{
                isOpen ?
                    <BiMinus></BiMinus>
                    : <BiPlus></BiPlus>
            }
                <div className='head'>{head}</div>
            </div>
            <div className='desc'>
                <div className='desc-inner'>{desc}</div>
            </div>
        </li>
    );
};

Faqs.Item = Item;

export default Faqs;