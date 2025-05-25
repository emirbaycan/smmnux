import { useTranslation } from "react-i18next";
import type { ItemwTheme } from "@/types";
import { PropsWithChildren } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import PrimaryReverseButton from "@/Components/PrimaryReverseButton";

export default function PanelServices() {
    const { t } = useTranslation();
    const items: Array<ItemwTheme> = t("ui.home.panel.items", { returnObjects: true });
    return (
        <div className='pservices'>
            <div className="section">
                <h2 className="header">{t('ui.home.panel.header')}</h2>
                <ul className="items">
                    <div className="box">
                        <PanelService
                            key={0}
                            index={0}
                            head={items[0].head}
                            desc={items[0].desc}>
                            {items[0].theme == 'light'
                                ? <PrimaryButton>{t('ui.home.panel.btn')}</PrimaryButton>
                                : <PrimaryReverseButton>{t('ui.home.panel.btn')}</PrimaryReverseButton>}
                        </PanelService>
                        <PanelService
                            key={1}
                            index={1}
                            head={items[1].head}
                            desc={items[1].desc}>
                            {items[1].theme == 'light'
                                ? <PrimaryButton>{t('ui.home.panel.btn')}</PrimaryButton>
                                : <PrimaryReverseButton>{t('ui.home.panel.btn')}</PrimaryReverseButton>}
                        </PanelService>
                        <PanelService
                            key={3}
                            index={3}
                            head={items[3].head}
                            desc={items[3].desc}>
                            {items[3].theme == 'light'
                                ? <PrimaryButton>{t('ui.home.panel.btn')}</PrimaryButton>
                                : <PrimaryReverseButton>{t('ui.home.panel.btn')}</PrimaryReverseButton>}
                        </PanelService>
                    </div>
                    <div className="box">
                        <PanelService
                            key={2}
                            index={2}
                            head={items[2].head}
                            desc={items[2].desc}>
                            {items[2].theme == 'light'
                                ? <PrimaryButton>{t('ui.home.panel.btn')}</PrimaryButton>
                                : <PrimaryReverseButton>{t('ui.home.panel.btn')}</PrimaryReverseButton>}
                        </PanelService>
                    </div>
                </ul>
            </div>
        </div>
    )
}

function PanelService({ head = '', desc = '', index = 0, children }: PropsWithChildren<ItemwTheme> & { index: number }) {
    return (
        <li className="item">
            <h3 className="head">{head}</h3>
            <p className="desc">{desc}</p>
            <div className="img-btn-holder">
                {children}
                <div
                    className={'box-image pservice-img-' + index}
                ></div>
            </div>
        </li>
    )
}