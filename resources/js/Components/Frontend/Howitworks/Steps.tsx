import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { ItemwButton } from "@/types";
import StepBoxes from "@/Components/Frontend/Howitworks/StepBoxes";
import InlineButton from "@/Components/Frontend/General/InlineButton";
import step1_img from '../../../assets/howitworks/step1.png';
import step2_img from '../../../assets/howitworks/step2.png';
import { Link } from "@inertiajs/react";

export default function Steps() {
    const { t } = useTranslation();
    return (
        <div className='steps-holder'>
            <h2 className="header">{t('ui.how_it_works.header')}</h2>
            <ul className="steps">
                <Step
                    key={0}
                    index={0}
                    head={t('ui.how_it_works.steps.0.head')}
                    desc={t('ui.how_it_works.steps.0.desc')}
                    btn={t('ui.how_it_works.steps.0.btn')}
                >
                    <img className="img" src={step1_img} />
                </Step>
                <Step
                    key={1}
                    index={1}
                    head={t('ui.how_it_works.steps.1.head')}
                    desc={t('ui.how_it_works.steps.1.desc')}
                    btn={t('ui.how_it_works.steps.1.btn')}
                >
                    <img className="img" src={step2_img} />
                </Step>
                <Step
                    key={2}
                    index={2}
                    head={t('ui.how_it_works.steps.2.head')}
                    desc={t('ui.how_it_works.steps.2.desc')}
                    btn={t('ui.how_it_works.steps.2.btn')}
                >
                    <StepBoxes></StepBoxes>
                </Step>
            </ul>
        </div>
    )
}

function Step({ head = '', desc = '', btn = '', index = 0, children = '' }: PropsWithChildren<ItemwButton> & { index: number }) {
    return (
        <li className="step">
            <div className="box">
                <div className="head">
                    <span className="number">{'0' + (index + 1) + ' '}</span>
                    <span className="text">{head}</span>
                </div>
                <p className="desc">{desc}</p>
                <InlineButton>
                    <Link
                        href={route('signup')}
                    >{btn}</Link>
                </InlineButton>
            </div>
            <div className="preview">
                {children}
            </div>
        </li>
    );
}
