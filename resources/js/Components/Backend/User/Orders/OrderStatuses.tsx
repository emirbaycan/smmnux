import { FaChartLine } from "react-icons/fa";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { Dispatch, InputHTMLAttributes, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import './OrderStatuses.scss'
import { MdCheck, MdPause, MdRefresh, MdViewList } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const orderStatusContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 1,
    setOpen: () => { },
});

export default function OrderStatuses({ onClick }: InputHTMLAttributes<HTMLDivElement>) {
    const [open, setOpen] = useState(1);
    const {t} = useTranslation();

    return (
        <orderStatusContext.Provider value={{ open, setOpen }}>
            <div className='order-statuses'>
                <Category name='All' value={1} onClick={onClick}>
                    <MdViewList></MdViewList>
                </Category>
                <Category name={t('ui.how_it_works.statuses.0.head')} value={2} onClick={onClick}>
                    <MdPause></MdPause>
                </Category>
                <Category name={t('ui.how_it_works.statuses.1.head')} value={3} onClick={onClick}>
                    <MdRefresh></MdRefresh>
                </Category>
                <Category name={t('ui.how_it_works.statuses.3.head')} value={4} onClick={onClick}>
                    <MdCheck></MdCheck>
                </Category>
                <Category name={t('ui.how_it_works.statuses.6.head')} value={5} onClick={onClick}>
                    <IoMdCheckmarkCircle></IoMdCheckmarkCircle>
                </Category>
                <Category name={t('ui.how_it_works.statuses.4.head')} value={6} onClick={onClick}>
                    <FaChartLine></FaChartLine>
                </Category>
                <Category name={t('ui.how_it_works.statuses.5.head')} value={7} onClick={onClick}>
                    <TbCurrencyDollarOff></TbCurrencyDollarOff>
                </Category>
            </div>
        </orderStatusContext.Provider>

    );
}

function Category({ name = '', value = 0, onClick = () => { }, children }: PropsWithChildren & InputHTMLAttributes<HTMLDivElement> & { name: string, value: number }) {
    const { open, setOpen } = useContext(orderStatusContext);

    return (
        <div className={"status " + (open == value ? 'open' : '')}
            onClick={(event) => { onClick(event); setOpen(value); }}
            data-value={value}
        >
            {children}
            <div className="name">
                {name}
            </div>
        </div>
    )
}