import { useTranslation } from "react-i18next";
import type { TItem } from "@/types";
import { PropsWithChildren } from "react";
import { superior } from "@/assets";
import PrimaryButton from "@/Components/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Seo() {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.home.seo.items", { returnObjects: true });
    return (
        <div className='seo'>
            <div className="section infos">
                <div className="items">
                    <Swiper
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {items.map((item: TItem, index: number) => (
                            <SwiperSlide key={index}>
                                <SeoItem
                                    key={index}
                                    index={index}
                                    head={item.head}
                                    desc={item.desc}></SeoItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="section superior">
                <div className="content">
                    <h3 className="header">{t('ui.home.seo.header')}</h3>
                    <p className="description">{t('ui.home.seo.content')}</p>
                    <PrimaryButton>{t('ui.home.seo.btn')}</PrimaryButton>
                </div>
                <img src={superior} className="image" />
            </div>
        </div >
    )
}

function SeoItem({ head = '', desc = '', index }: PropsWithChildren<TItem> & { index: number }) {
    return (
        <div className="item" key={index}>
            <h4 className="head">{head}</h4>
            <p className="desc">{desc}</p>
        </div>
    )
}
