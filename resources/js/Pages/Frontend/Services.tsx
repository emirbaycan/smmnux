import { Head } from '@inertiajs/react';
import { ItemwImage, PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend';
import { Trans, useTranslation } from 'react-i18next';
import { serviceImages } from "../../constants";
import './Services.scss'

export default function Services({ auth }: PageProps) {
    const { t } = useTranslation();
    const items: Array<ItemwImage> = t("ui.services.items", { returnObjects: true });
    return (
        <Frontend className='our-services'>
            <Head title="Services" />
            <div className='section'>
                <div className="content">
                    <h3 className='header'>{t('ui.services.header')}</h3>
                    <div className='description'>
                        <Trans>
                            {t('ui.services.description')}
                        </Trans>
                    </div>
                </div>
                <ul className="items">
                    {items.map((service: ItemwImage, index: number) => (
                        <Service key={index} img={serviceImages[index].img} head={service.head} desc={service.desc}></Service>
                    ))}
                </ul>
            </div>
        </Frontend>
    );
}

function Service({ img = '', head = '', desc = '' }: ItemwImage) {
    return (
        <li className="item">
            <img className="img" src={img} />
            <h4 className="head">{head}</h4>
            <p className="desc">{desc}</p>
        </li>
    );
}
