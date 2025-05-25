import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import Iconized from '@/Components/Backend/User/NewOrder/Iconized';
import { FaEnvelope, FaEnvelopeOpen, FaLanguage, FaMoneyBillAlt, FaPortrait, FaShoppingCart, FaSkype, FaTicketAlt, FaUser, FaWhatsapp } from 'react-icons/fa';
import { Box, BoxHeader } from '@/Components/Backend/User/General/Box';
import PrimaryButton from '@/Components/PrimaryButton';
import './Dashboard.scss';

export default function Dashboard({ auth }: PageProps) {
    const { t } = useTranslation();
    var user = auth.user;
    return (
        <UserLayout
        className='dashboard'
            user={auth.user}
        >
            <Head title={t('panel.header.dashboard.head')} />
            <Box>
                <BoxHeader>{t('panel.header.dashboard.head')}</BoxHeader>
                <div className='iconizeds'>
                    <Iconized head={t('panel.dashboard.fullname')} desc={user.fullname}>
                        <FaUser></FaUser>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.user_language')} desc={'en'}>
                        <FaLanguage></FaLanguage>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.my_orders')} desc={'0'}>
                        <FaShoppingCart></FaShoppingCart>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.spend')} desc={'0'}>
                        <FaMoneyBillAlt></FaMoneyBillAlt>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.id')} desc={user.id}>
                        <FaPortrait></FaPortrait>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.email')} desc={user.email}>
                        <FaEnvelope></FaEnvelope>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.unread_tickets')} desc={'0'}>
                        <FaTicketAlt></FaTicketAlt>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.skype')} desc={user.skype}>
                        <FaSkype></FaSkype>
                    </Iconized>
                    <Iconized head={t('panel.dashboard.whatsapp')} desc={user.whatsapp}>
                        <FaWhatsapp></FaWhatsapp>
                    </Iconized>
                </div>
            </Box>
            <Box>
                <div className='box-header-holder'>
                    <BoxHeader>{t('panel.dashboard.account_benefits')}</BoxHeader>
                    <PrimaryButton>{t('panel.dashboard.know_more')}</PrimaryButton>
                </div>
            </Box>
            <Box>
                <div className='box-header-holder'>
                    <BoxHeader>{t('panel.dashboard.account_points')}</BoxHeader>
                </div>
            </Box>
        </UserLayout>
    );
}  