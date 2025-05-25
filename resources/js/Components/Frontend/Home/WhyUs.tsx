import { Trans, useTranslation } from "react-i18next";
import type { ItemwIcon } from "@/types";
import { PropsWithChildren } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { whyusIcons } from "@/constants/home";
import { IconBase, IconType } from "react-icons/lib";
export default function WhyUs() {
    const { t } = useTranslation();
    const items: Array<ItemwIcon> = t("ui.home.why_us.items", { returnObjects: true });
    return (
        <div className='whyus'>
            <div className="section">
                <div className="content">
                    <h2 className="header">{t('ui.home.why_us.header')}</h2>
                    <Trans>
                        <p className="description">{t('ui.home.why_us.content')}</p>
                    </Trans>
                    <PrimaryButton>{t('ui.home.why_us.btn')}</PrimaryButton>
                </div>
                <div className="boxes">
                    <div className="box">
                        <WhyUsItem
                            key={0}
                            head={t('ui.home.why_us.items.0.head')}
                            desc={t('ui.home.why_us.items.0.desc')}
                            Icon={whyusIcons[0].Icon}>
                        </WhyUsItem>
                    </div>
                    <div className="box">
                        <WhyUsItem
                            key={1}
                            head={t('ui.home.why_us.items.1.head')}
                            desc={t('ui.home.why_us.items.1.desc')}
                            Icon={whyusIcons[1].Icon}>
                        </WhyUsItem>
                        <WhyUsItem
                            key={2}
                            head={t('ui.home.why_us.items.2.head')}
                            desc={t('ui.home.why_us.items.2.desc')}
                            Icon={whyusIcons[2].Icon}>
                        </WhyUsItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WhyUsItem({ head = '', desc = '', Icon}: ItemwIcon) {
    return (
        <div className="holder">
            <Icon />
            <div className="inner">
                <h3 className="head">{head}</h3>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}