import { PropsWithChildren } from "react";
import { Trans, useTranslation } from "react-i18next";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import Signin from "./Signin";

export default function Banner() {
    return (
        <div className='banner'>
            <div className="section">
                <Signin />
                <Chart />
            </div>
        </div>
    )
}

function Chart() {
    const { t } = useTranslation();
    const chart_items: Array<string> = t("ui.home.chart.items", { returnObjects: true });
    return (
        <div className='chart banner-part'>
            <h2 className="header">
                {t('ui.home.chart.header')}
            </h2>
            <div className='inner'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{t('ui.home.chart.head_0')}</th>
                            <th>{t('ui.home.chart.head_1')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chart_items.map((text: string, index: number) => (
                            <ChartItem key={index}>
                                <Trans>
                                    {text}
                                </Trans>
                            </ChartItem>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function ChartItem({ children = '' }: PropsWithChildren) {
    return (
        <tr>
            <td className="text">{children}</td>
            <td><div className="icon"><CiCircleCheck></CiCircleCheck></div></td>
            <td><div className="icon"><CiCircleRemove></CiCircleRemove></div></td>
        </tr>
    );
}
