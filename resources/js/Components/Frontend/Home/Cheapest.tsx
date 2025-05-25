import { useTranslation } from "react-i18next";
import type { TItem } from "@/types";
import { PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Cheapest() {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.home.cheapest.items", { returnObjects: true });
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='section cheapest'>
            <h3 className="header">{t('ui.home.cheapest.header')}</h3>
            <div className="items">
                <Swiper
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                    {items.map((item: TItem, index: number) => (
                        <SwiperSlide key={index}>
                            <CheapestItem
                                head={item.head}
                                desc={item.desc}></CheapestItem>
                        </SwiperSlide>
                    ))}
                </Swiper> 
            </div>
        </div>
    )
}

function CheapestItem({ head = '', desc = '' }: PropsWithChildren<TItem>) {
    return (
        <div className="item">
            <h4 className="head">{head}</h4>
            <p className="desc">{desc}</p>
        </div>
    )
}
