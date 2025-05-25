import { useTranslation } from "react-i18next";
import { TItem } from "@/types";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

const StepBoxesContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 0,
    setOpen: () => { },
});

export default function StepBoxes() {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.how_it_works.step_boxes", { returnObjects: true });
    const [open, setOpen] = useState(0);

    return (
        <StepBoxesContext.Provider value={{ open, setOpen }}>
            <div className='step-box'>
                <ul className="contents">
                    {items.map((item: TItem, index: number) => (
                        <StepBox
                            key={index}
                            index={index}
                            head={item.head}
                            desc={item.desc}></StepBox>
                    ))}
                </ul>
                <ul className="navs">
                    {items.map((item: TItem, index: number) => (
                        <StepBoxNav key={index} index={index}></StepBoxNav>
                    ))}
                </ul>
            </div>
        </StepBoxesContext.Provider>
    )
}

function StepBox({ index = 0, head = '', desc = '' }: PropsWithChildren<TItem> & { index: number }) {
    const { open } = useContext(StepBoxesContext);
    return (
        <li className={'content ' + (open == index ? 'open' : '')}>
            <h3 className="head">{head}</h3>
            <p className="desc">{desc}</p>
        </li>
    )
}

function StepBoxNav({ index = 0 }: PropsWithChildren & { index: number }) {
    const { open, setOpen } = useContext(StepBoxesContext);
    return (
        <li className={'nav ' + (open == index ? 'open' : '')} onClick={() => setOpen(index)}>
            <span className="head">{index+1}</span>
        </li>
    )
}