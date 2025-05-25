import { Trans, useTranslation } from "react-i18next";
import { Link } from '@inertiajs/react';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="inner">
                <div className="top">
                    <div className="section">
                        <div className="box-image payment"></div>
                        <div className="infos">
                            <div className="info">
                                <div className="box-image icon"></div>
                                <div className="head">{t('ui.footer.contact.0.title')}</div>
                                <a className="desc" href={"mailto:" + t('ui.footer.contact.0.link')}>{t('ui.footer.contact.0.link')}</a>
                            </div>
                            <div className="info">
                                <div className="box-image icon"></div>
                                <div className="head">{t('ui.footer.contact.1.title')}</div>
                                <a className="desc" href={"skype:" + t('ui.footer.contact.1.link')}>{t('ui.footer.contact.1.link')}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <div className="section">
                        <div className="text">
                            <Trans>{t('ui.footer.rights')}</Trans>
                        </div>
                        <ul className="links">
                            <li className="link"><Link href={route(t('ui.footer.terms.link'))}>{t('ui.footer.terms.head')}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;