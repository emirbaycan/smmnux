import { useTranslation } from "react-i18next";
import type { TItem } from "@/types";
import { PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Features() {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.home.features.items", { returnObjects: true });

    return (
        <div className='features'>
            <div className="section">
                <h3 className="header">{t('ui.home.features.header')}</h3>
                <div className="items">
                    <Swiper
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {items.map((item: TItem, index: number) => (
                            <SwiperSlide key={index}>
                                <Feature
                                    key={index}
                                    index={index}
                                    head={item.head}
                                    desc={item.desc}></Feature>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

function Feature({ head = '', desc = '', index = 0 }: PropsWithChildren<TItem> & { index: number }) {
    return (
        <div className="item">
            <div
                className={'box-image box-image-' + index}
            ></div>
            <h4 className="head">{head}</h4>
            <p className="desc">{desc}</p>
        </div>
    )
}
