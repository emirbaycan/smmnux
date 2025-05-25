import { Head } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Box, BoxHeader, BoxTextInfo, BoxesCol } from '@/Components/Backend/User/General/Box';

export default function Affiliates({ auth }: PageProps) {
    const { t } = useTranslation();
    const items: Array<TItem> = t("panel.affiliates.boxes", { returnObjects: true });
    return (
        <UserLayout
            className='affiliates'
            user={auth.user}
        >
            <Head title={t('panel.header.affiliates.head')} />
            <BoxTextInfo>{t('panel.affiliates.note')}</BoxTextInfo>
            <BoxesCol>
                <Box>
                    <BoxHeader>{t('panel.affiliates.referral_links')}</BoxHeader>
                    <table>
                        <thead>
                            <tr><th>{t('panel.affiliates.referral_link')}</th></tr>
                            <tr><th>{t('panel.affiliates.comission_rate')}</th></tr>
                            <tr><th>{t('panel.affiliates.minimum_payout')}</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>https://bulkfollows.com/ref/aoirr</td>
                                <td>2%</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Box>
                    <BoxHeader>{t('panel.affiliates.affiliate_statistics')}</BoxHeader>
                    <table>
                        <thead>
                            <tr><th>{t('panel.affiliates.visits')}</th></tr>
                            <tr><th>{t('panel.affiliates.registrations')}</th></tr>
                            <tr><th>{t('panel.affiliates.referrals')}</th></tr>
                            <tr><th>{t('panel.affiliates.conversion_rate')}</th></tr>
                            <tr><th>{t('panel.affiliates.total_earnings')}</th></tr>
                            <tr><th>{t('panel.affiliates.available_earnings')}</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0.00%</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                {items.map((item: TItem, index: number) => (
                    <Box>
                        <BoxHeader>{item.head}</BoxHeader>
                        <div className='content'><Trans>{item.desc}</Trans></div>
                    </Box>
                ))}
            </BoxesCol>
        </UserLayout>
    );
}  