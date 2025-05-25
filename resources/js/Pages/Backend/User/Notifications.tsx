import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Boxes, Box } from '@/Components/Backend/User/General/Box';
import { MdEmail } from 'react-icons/md';
import PrimaryButton from '@/Components/PrimaryButton';
import Popup from '@/Components/Backend/General/Popup';
import { ServicePopup } from '@/Components/Backend/User/Notifications/ServicePopup';
import { useState } from 'react';

import { notifications_popup, notifications_email, notifications_popup_email } from '@/assets';

import './Notifications.scss';

export default function Notifications({ auth }: PageProps) {
    const { t } = useTranslation();
    const [popupAllServices, setPopupAllServices] = useState(false);
    const [popupState, setPopupState] = useState(false);
    const [popupEmail, setPopupEmail] = useState(false);
    const [popupEmailPopup, setPopupEmailPopup] = useState(false);

    return (
        <UserLayout
            className='notifications'
            user={auth.user}
        >
            <Head title={t('panel.header.notifications.head')} />
            <div className='header'>
                <Trans>
                    {t('panel.notifications.header')}
                </Trans>
            </div>
            <Boxes>
                <Box>
                    <div className='notification'>
                        <img className='img' src={notifications_email} />
                        <div className='head'>{t('panel.notifications.services.0.head')}</div>
                        <div className='desc'><Trans>{t('panel.notifications.services.0.desc')}</Trans></div>
                        <div className='actions'>
                            <PrimaryButton>{t('panel.notifications.subscribe')}</PrimaryButton>
                            <PrimaryButton>{t('panel.notifications.unsubscribe')}</PrimaryButton>
                            <PrimaryButton onClick={() => setPopupAllServices(true)}>{t('panel.notifications.view_details')}</PrimaryButton>
                        </div>
                        <ServicePopup open={popupAllServices} setOpen={setPopupAllServices} head={t('panel.notifications.services.0.detail_head')}>
                            <Trans>
                                {t('panel.notifications.services.0.detail_desc')}
                            </Trans>
                        </ServicePopup>
                    </div>
                </Box>
            </Boxes>
            <Boxes>
                <Box>
                    <div className='notification'>
                        <img className='img' src={notifications_popup} />
                        <div className='head'>{t('panel.notifications.services.1.head')}</div>
                        <div className='desc'>{t('panel.notifications.services.1.desc')}</div>
                        <div className='actions'>
                            <PrimaryButton>{t('panel.notifications.subscribe')}</PrimaryButton>
                            <PrimaryButton>{t('panel.notifications.unsubscribe')}</PrimaryButton>
                            <PrimaryButton onClick={() => setPopupState(true)}>{t('panel.notifications.view_details')}</PrimaryButton>
                        </div>
                        <ServicePopup open={popupState} setOpen={setPopupState} head={t('panel.notifications.services.1.detail_head')}>
                            <Trans>
                                {t('panel.notifications.services.1.detail_desc')}
                            </Trans>
                        </ServicePopup>
                    </div>
                </Box>
                <Box>
                    <div className='notification'>
                        <img className='img' src={notifications_email} />
                        <div className='head'>{t('panel.notifications.services.2.head')}</div>
                        <div className='desc'>{t('panel.notifications.services.2.desc')}</div>
                        <div className='actions'>
                            <PrimaryButton>{t('panel.notifications.subscribe')}</PrimaryButton>
                            <PrimaryButton>{t('panel.notifications.unsubscribe')}</PrimaryButton>
                            <PrimaryButton onClick={() => setPopupEmail(true)}>{t('panel.notifications.view_details')}</PrimaryButton>
                        </div>
                        <ServicePopup open={popupEmail} setOpen={setPopupEmail} head={t('panel.notifications.services.2.detail_head')}>
                            <Trans>
                                {t('panel.notifications.services.2.detail_desc')}
                            </Trans>
                        </ServicePopup>
                    </div>
                </Box>
                <Box>
                    <div className='notification'>
                        <img className='img' src={notifications_popup_email} />
                        <div className='head'>{t('panel.notifications.services.3.head')}</div>
                        <div className='desc'>{t('panel.notifications.services.3.desc')}</div>
                        <div className='actions'>
                            <PrimaryButton>{t('panel.notifications.subscribe')}</PrimaryButton>
                            <PrimaryButton>{t('panel.notifications.unsubscribe')}</PrimaryButton>
                            <PrimaryButton onClick={() => setPopupEmailPopup(true)}>{t('panel.notifications.view_details')}</PrimaryButton>
                        </div>
                        <ServicePopup open={popupEmailPopup} setOpen={setPopupEmailPopup} head={t('panel.notifications.services.3.detail_head')}>
                            <Trans>
                                {t('panel.notifications.services.3.detail_desc')}
                            </Trans>
                        </ServicePopup>
                    </div>
                </Box>
            </Boxes>
        </UserLayout>
    );
}  
