import { Head, useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Box, BoxHeader, Boxes, BoxText, BoxTextInfo, BoxesCol } from '@/Components/Backend/User/General/Box';
import DropdownSelect from '@/Components/General/DropdownSelect';
import { Tselect } from '@/types/backend';
import InputwLabel from '@/Components/Backend/General/InputwLabel';
import { FormEventHandler, useState } from 'react';
import './Account.scss';
import { ChangeEmail } from '@/Components/Backend/User/Account/ChangeEmail';

function TwoFactor() {
    const { t } = useTranslation();
    return (
        <Box className='two-factor'>
            <BoxHeader>{t('panel.account.two_factor.head')}</BoxHeader>
            <BoxText>{t('panel.account.two_factor.desc')}</BoxText>
            <PrimaryButton>{t('panel.account.two_factor.btn')}</PrimaryButton>
        </Box>
    );
}

function ChangePassword() {
    const { t } = useTranslation();

    return (
        <form>
            <InputwLabel
                id="current_password"
                name="current_password"
                type="password"
                title={t('panel.account.details.password')}
            ></InputwLabel>
            <InputwLabel
                id="new_password"
                name="new_password"
                type="password"
                title={t('panel.account.details.password_new')}
            ></InputwLabel>
            <InputwLabel
                id="new_password_re"
                name="new_password_re"
                type="password"
                title={t('panel.account.details.password_re')}
            ></InputwLabel>
            <PrimaryButton className='save'>{t('panel.account.details.btn_save')}</PrimaryButton>
        </form>
    )
}

function ChangeTimezone({ timezone = '' }: { timezone: String }) {
    const { t } = useTranslation();
    const select_data: Array<Tselect> = t("panel.account.timezone.items", { returnObjects: true });

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        timezone: timezone,
    });

    const update: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('account.update'));
    };


    return (
        <Box className='timezone'>
            <BoxHeader>{t('panel.account.timezone.head')}</BoxHeader>
            <DropdownSelect callback={() => { }}>
                <DropdownSelect.HeaderHolder>
                    <DropdownSelect.Header>
                        {t('panel.account.timezone.category_header')}
                    </DropdownSelect.Header>
                </DropdownSelect.HeaderHolder>
                <DropdownSelect.Items>
                    {select_data.map((option: Tselect, index: number) => (
                        <DropdownSelect.Item index={index} value={option.value} >
                            {option.label}
                        </DropdownSelect.Item>
                    ))}
                </DropdownSelect.Items>
            </DropdownSelect>
            <PrimaryButton>{t('panel.account.timezone.btn')}</PrimaryButton>
        </Box>
    )
}

export default function Account({ auth }: PageProps) {
    const { t } = useTranslation();
    const [changeEmail, openChangeEmail] = useState(false);
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        email: user.email,
    });

    const updateEmail: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('account.update'));
    };

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('account.update'));
    };


    return (
        <UserLayout
            className='account'
            user={auth.user}
        >
            <Head title={t('panel.header.account.head')} />
            <Boxes>
                <BoxesCol>
                    <TwoFactor></TwoFactor>
                    <ChangeTimezone timezone={''}></ChangeTimezone>
                    <Box className='api-key'>
                        <BoxHeader>{t('panel.account.api.head')}</BoxHeader>
                        <BoxTextInfo>{t('panel.account.api.note')}</BoxTextInfo>
                        <PrimaryButton>{t('panel.account.api.btn')}</PrimaryButton>
                    </Box>
                </BoxesCol>
                <Boxes>
                    <Box className='account-details'>
                        <BoxHeader>{t('panel.account.details.head')}</BoxHeader>
                        <InputwLabel
                            disabled
                            id="username"
                            name="username"
                            type="text"
                            title={t('panel.account.details.username')}
                            value={user.username}
                        ></InputwLabel>
                        <InputwLabel
                            disabled
                            id="email"
                            name="email"
                            type="text"
                            title={t('panel.account.details.email')}
                            value={data.email}
                        ></InputwLabel>
                        <PrimaryButton className='change-email' onClick={() => { openChangeEmail(true); }}>{t('panel.account.details.btn')}</PrimaryButton>
                        <ChangeEmail open={changeEmail} setOpen={openChangeEmail} current_email={data.email}></ChangeEmail>
                        <ChangePassword></ChangePassword>
                    </Box>
                </Boxes>
            </Boxes>
        </UserLayout>
    );
}