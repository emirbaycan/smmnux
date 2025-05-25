import type { TItem } from "@/types";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    const about_items: Array<TItem> = t("ui.home.about.items", { returnObjects: true });
    return (
        <div className='about'>
            <div className="section">
                <h2 className="section-header">{t('ui.home.about.header')}</h2>
                <ul>
                    {about_items.map((item: TItem, index: number) => (
                        <AboutItem key={index} head={item.head} desc={item.desc}></AboutItem>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function AboutItem({ head = '', desc = '' }) {
    return (
        <li className="">
            <h3 className="head">{head}</h3>
            <p className="desc">{desc}</p>
        </li>
    )
}