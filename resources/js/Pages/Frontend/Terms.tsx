import { Head } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import Frontend from '@/Layouts/Frontend';
import { PropsWithChildren, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { policyImages } from "../../constants";
import './Terms.scss';
import { FaCog, FaFilePowerpoint, FaHandHoldingUsd, FaShieldAlt } from 'react-icons/fa';

export default function Terms({ auth }: PageProps) {
    const { t } = useTranslation();
    const term_contents: Array<TItem> = t("ui.terms.term_contents", { returnObjects: true });
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Frontend className='terms'>
            <Head title="Terms" />
            <div className='section'>
                <div className='box'>
                    <h3 className='header'>
                        {t('ui.terms.header')}
                    </h3>
                    <div className='description'>
                        <Trans>
                            {t('ui.terms.description')}
                        </Trans>
                    </div>
                    <ul className="navs">
                        <PolicyHeader
                            key={0}
                            head={t('ui.terms.term_headers.0.head')}
                            desc={t('ui.terms.term_headers.0.desc')}
                            onClick={() => setActiveIndex(0)}
                            active={activeIndex == 0 ? true : false}
                        >
                            <FaShieldAlt></FaShieldAlt>
                        </PolicyHeader>
                        <PolicyHeader
                            key={1}
                            head={t('ui.terms.term_headers.1.head')}
                            desc={t('ui.terms.term_headers.1.desc')}
                            onClick={() => setActiveIndex(1)}
                            active={activeIndex == 1 ? true : false}
                        >
                            <FaCog></FaCog>
                        </PolicyHeader>
                        <PolicyHeader
                            key={2}
                            head={t('ui.terms.term_headers.2.head')}
                            desc={t('ui.terms.term_headers.2.desc')}
                            onClick={() => setActiveIndex(2)}
                            active={activeIndex == 2 ? true : false}
                        >
                            <FaHandHoldingUsd></FaHandHoldingUsd>
                        </PolicyHeader>
                        <PolicyHeader
                            key={3}
                            head={t('ui.terms.term_headers.3.head')}
                            desc={t('ui.terms.term_headers.3.desc')}
                            onClick={() => setActiveIndex(3)}
                            active={activeIndex == 3 ? true : false}
                        >
                            <FaFilePowerpoint></FaFilePowerpoint>
                        </PolicyHeader>
                    </ul>
                    <div className="contents">
                        {term_contents.map((term: TItem, index: number) => (
                            <Policy key={index} active={activeIndex == index ? true : false}>
                                <h4 className='head'>{term.head}</h4>
                                <div className='html'>
                                    <Trans components={{ li: <li />, p: <p />, b: <b /> }}>
                                        {term.desc}
                                    </Trans>
                                </div>
                            </Policy>
                        ))}
                    </div>
                </div>
            </div>
        </Frontend>
    );
}


function Policy({ children, active = false }: PropsWithChildren & { active: true | false }) {
    return (
        <div
            className={`content
            ${active
                    ? 'open'
                    : 'hidden'
                }`}>
            {children}
        </div>
    );
}

function PolicyHeader({ head = '', desc = '', children, active = false, onClick = () => { } }: PropsWithChildren & TItem & { active: true | false, onClick: () => void }) {
    return (
        <li className={`nav 
            ${active
                ? 'open'
                : 'hidden'
            }`}
            onClick={onClick}
        >
            <div className="inner">
                {children}
                <div className='head-holder'>
                    <h4 className="head">{head}</h4>
                    <p className="desc">{desc}</p>
                </div>
            </div>
        </li>
    );
}
