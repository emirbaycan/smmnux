import { useTranslation } from "react-i18next";
import type { ItemwImage } from "@/types";
import { PropsWithChildren } from "react";
import { benefitImages } from "@/constants/home";

export default function Benefits() {
    const { t } = useTranslation();
    const items: Array<ItemwImage> = t("ui.home.benefits.items", { returnObjects: true });
    return (
        <div className='benefits'>
            <div className="section">
                <h2 className="header">{t('ui.home.benefits.header')}</h2>
                <ul className="items">
                    {items.map((item: ItemwImage, index: number) => (
                        <Benefit
                            key={index}
                            head={item.head}
                            desc={item.desc}
                            img={benefitImages[index].img}></Benefit>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Benefit({ head = '', desc = '', img = '' }: PropsWithChildren<ItemwImage>) {
    return (
        <li className="item">
            <img src={img} className="img"/>
            <h3 className="head">{head}</h3>
            <p className="desc">{desc}</p>
        </li>
    )
}