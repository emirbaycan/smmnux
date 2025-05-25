import { Head, useForm } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Boxes, Box, BoxHeader, BoxesCol } from '@/Components/Backend/User/General/Box';
import { FaFile } from 'react-icons/fa';
import InputwLabel from '@/Components/Backend/General/InputwLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import './CreateInvoice.scss';

export default function CreateInvoice({ auth }: PageProps) {
    const { t } = useTranslation();
    const items: Array<TItem> = t('panel.create_invoice.how_to.infos', { returnObjects: true });
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        address: '',
        vat: '',
        date: '',
        amount: '',
        email: ''
    });

    return (
        <UserLayout
            className='createinvoice'
            user={auth.user}
        >
            <Head title={t('panel.header.create_invoice.head')} />
            <BoxesCol>
                <Boxes>
                    <Box>
                        <BoxHeader>
                            <FaFile></FaFile>
                            {t('panel.create_invoice.create_invoice.head')}
                        </BoxHeader>
                        <div className='content'>
                            <form>
                                <InputwLabel
                                    id='name'
                                    name='name'
                                    title={t('panel.create_invoice.create_invoice.company_name')}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.currentTarget.value)}
                                ></InputwLabel>
                                <InputwLabel
                                    id='address'
                                    name='address'
                                    title={t('panel.create_invoice.create_invoice.company_address')}
                                    value={data.address}
                                    onChange={(e) => setData('address', e.currentTarget.value)}
                                ></InputwLabel>
                                <InputwLabel
                                    id='vat'
                                    name='vat'
                                    title={t('panel.create_invoice.create_invoice.vat')}
                                    value={data.vat}
                                    onChange={(e) => setData('vat', e.currentTarget.value)}
                                ></InputwLabel>
                                <InputwLabel
                                    id='date'
                                    name='date'
                                    title={t('panel.create_invoice.create_invoice.invoice_data')}
                                    value={data.date}
                                    onChange={(e) => setData('date', e.currentTarget.value)}
                                ></InputwLabel>
                                <InputwLabel
                                    id='amount'
                                    name='amount'
                                    title={t('panel.create_invoice.create_invoice.invoice_amount')}
                                    value={data.amount}
                                    onChange={(e) => setData('amount', e.currentTarget.value)}
                                ></InputwLabel>
                                <InputwLabel
                                    id='email'
                                    name='email'
                                    title={t('panel.create_invoice.create_invoice.email')}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.currentTarget.value)}
                                ></InputwLabel>
                                <PrimaryButton>{t('panel.create_invoice.create_invoice.create_invoice_btn')}</PrimaryButton>
                            </form>
                        </div>
                    </Box>
                    <Box>
                        <BoxHeader>
                            <FaFile></FaFile>
                            {t('panel.create_invoice.how_to.head')}
                        </BoxHeader>
                        <div className='content'>
                            <div className='gray'>
                                <Trans>
                                    {t('panel.create_invoice.how_to.info')}
                                </Trans>
                            </div>
                            {items.map((item: TItem, index: number) => (
                                <div className='gray'><b>{item.head}</b> {item.desc}</div>
                            ))}
                        </div>
                    </Box>
                </Boxes>
                <Box>
                    <BoxHeader>
                        <FaFile></FaFile>
                        {t('panel.create_invoice.invoice_history.head')}
                    </BoxHeader>
                    <div className='content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('panel.create_invoice.invoice_history.invoice_no')}</th>
                                    <th>{t('panel.create_invoice.invoice_history.subject')}</th>
                                    <th>{t('panel.create_invoice.invoice_history.date')}</th>
                                    <th>{t('panel.create_invoice.invoice_history.status')}</th>
                                    <th>{t('panel.create_invoice.invoice_history.download')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                </Box>
            </BoxesCol>
        </UserLayout>
    );
}  