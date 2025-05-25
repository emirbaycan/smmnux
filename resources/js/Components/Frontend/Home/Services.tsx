import { useTranslation } from "react-i18next";
import type { ItemwIcon } from "@/types";
import { homeServiceIcons } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Services() {
    const { t } = useTranslation();
    const items: Array<ItemwIcon> = t("ui.home.services.items", { returnObjects: true });

    return (
        <div className='services'>
            <div className="section">
                <h2 className="header section-header">{t('ui.home.services.header')}</h2>
                <p className="description">{t('ui.home.services.content')}</p>
                <div className="items">
                    <Swiper
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {items.map((item: ItemwIcon, index: number) => (
                            <SwiperSlide key={index}>
                                <Service
                                    head={item.head}
                                    desc={item.desc}
                                    Icon={homeServiceIcons[index].Icon}></Service>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

function Service({ head = '', desc = '', Icon }: ItemwIcon) {
    return (
        <div className="swiper-slide">
            <div className="item">
                <div className="icon"><Icon /></div>
                <h3 className="head">{head}</h3>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}