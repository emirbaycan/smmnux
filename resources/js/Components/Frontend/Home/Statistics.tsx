import { Trans, useTranslation } from "react-i18next";
import { TItem } from "@/types";
import { PropsWithChildren } from "react";
import { target } from "@/assets";

export default function Statistics() {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.home.statistics.items", { returnObjects: true });
    return (
        <div className='statistics'>
            <div className="infos">
                <div className="section">
                    <div className="content">
                        <h2 className="header">{t('ui.home.statistics.header')}</h2>
                        <p className="description">{t('ui.home.statistics.content')}</p>
                    </div>
                    <ul className="boxes">
                        {items.map((item: TItem, index: number) => (
                            <StatisticItem
                                key={index}
                                index={index}
                                head={item.head}
                                desc={item.desc}></StatisticItem>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="targeted">
                <div className="section">
                    <div className="content">
                        <h2 className="header">{t('ui.home.targeted.header')}</h2>
                        <p className="description">
                            <Trans>{t('ui.home.targeted.content')}</Trans>
                        </p>
                    </div>
                    <img src={target} className="img"></img>
                </div>
            </div>
        </div>
    )
}

function StatisticItem({ head = '', desc = '', index = 0 }: PropsWithChildren<TItem> & { index: number }) {
    return (
        <li className="box">
            <div className={'box-image box-img-' + index}></div>
            <div className="holder">
                <h4 className="head">{head}</h4>
                <p className="desc">{desc}</p>
            </div>
        </li>
    )
}
