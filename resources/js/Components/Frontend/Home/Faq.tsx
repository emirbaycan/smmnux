import { useTranslation } from "react-i18next";
import type { TItem } from "@/types";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FaqsContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 0,
    setOpen: () => { },
});

export default function Faq() {
    const [open, setOpen] = useState(0);
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.home.features.items", { returnObjects: true });
    return (
        <FaqsContext.Provider value={{ open, setOpen }}>
            <div className="faq">
                <div className="faq-bg bg"></div>
                <div className="section">
                    <FaqItem start={1} which="site"></FaqItem>
                    <FaqItem start={100} which="panel"></FaqItem>
                </div>
            </div>
        </FaqsContext.Provider>
    )
}

function FaqItem({ start = 0, which = '' }) {
    which = "ui.home.faq." + which;
    const { t } = useTranslation();
    const items: Array<TItem> = t(which + ".items", { returnObjects: true });
    return (
        <div className='faq-item'>
            <h4 className="header">{t(which + '.header')}</h4>
            <ul className="items">
                {items.map((item: TItem, index: number) => (
                    <Question
                        key={index}
                        index={start + index}
                        head={item.head}
                        desc={item.desc}></Question>
                ))}
            </ul>
        </div>
    )
}

function Question({ index = 0, head = '', desc = '' }: PropsWithChildren<TItem> & { index: number }) {
    const { open, setOpen } = useContext(FaqsContext);
    var isOpen = (open == index ? true : false);
    return (
        <li className={"item " + (isOpen ? 'open' : '')} onClick={() => { setOpen(index) }}>
            <div className="head-holder">
                <h5 className="head">{head}</h5>
                <FaAngleDown></FaAngleDown>
            </div>
            <div className="desc">
                <div className="desc-inner">{desc}</div>
            </div>
        </li>
    )
}
