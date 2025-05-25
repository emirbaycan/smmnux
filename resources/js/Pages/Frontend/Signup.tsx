import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend';
import { RiUserAddLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import InputwIcon from '@/Components/Frontend/General/InputwIcon';
import { MdAlternateEmail } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { FaLock, FaSkype, FaTelegram, FaUserCheck, FaWhatsapp } from 'react-icons/fa';
import PrimaryButton from '@/Components/PrimaryButton';
import { FormEventHandler, useEffect } from 'react';
import InputError from '@/Components/General/InputError';
import './Signup.scss';

export default function Signup({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        username: '',
        fullname: '',
        skype: '',
        whatsapp: '',
        telegram: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);


    const { t } = useTranslation();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('signup'));
    };

    return (
        <Frontend className='signup'>
            <Head title="Signin" />
            <div className='section'>
                <div className='header'>
                    <RiUserAddLine></RiUserAddLine>
                    <h2>{t('ui.signup.header')}</h2>
                </div>
                <p className='description'>{t('ui.signup.description')}</p>
                <p className='note'>
                    {t('ui.signup.note')}
                </p>
                <form className='form' onSubmit={submit}>
                    <div className='holder'>
                        <InputwIcon
                            id='email'
                            name='email'
                            type='email'
                            placeholder={t('ui.signup.email')}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}>
                            <MdAlternateEmail></MdAlternateEmail>
                        </InputwIcon>
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='username'
                            name='username'
                            type='text'
                            placeholder={t('ui.signup.username')}
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}>
                            <CiUser></CiUser>
                        </InputwIcon>
                        <InputError message={errors.username} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='fullname'
                            name='fullname'
                            type='text'
                            placeholder={t('ui.signup.fullname')}
                            value={data.fullname}
                            onChange={(e) => setData('fullname', e.target.value)}>
                            <FaUserCheck></FaUserCheck>
                        </InputwIcon>
                        <InputError message={errors.fullname} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='skype'
                            name='skype'
                            type='text'
                            placeholder={t('ui.signup.skype')}
                            value={data.skype}
                            onChange={(e) => setData('skype', e.target.value)}>
                            <FaSkype></FaSkype>
                        </InputwIcon>
                        <InputError message={errors.skype} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='whatsapp'
                            name='whatsapp'
                            type='text'
                            placeholder={t('ui.signup.whatsapp')}
                            value={data.whatsapp}
                            onChange={(e) => setData('whatsapp', e.target.value)}>
                            <FaWhatsapp></FaWhatsapp>
                        </InputwIcon>
                        <InputError message={errors.whatsapp} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='telegram'
                            name='telegram'
                            type='text'
                            placeholder={t('ui.signup.telegram')}
                            value={data.telegram}
                            onChange={(e) => setData('telegram', e.target.value)}>
                            <FaTelegram></FaTelegram>
                        </InputwIcon>
                        <InputError message={errors.telegram} className="mt-2" />
                    </div>
                    <div className='holder'>
                        <InputwIcon
                            id='password'
                            name='password'
                            type='password'
                            placeholder={t('ui.signup.password')}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}>
                            <FaLock></FaLock>
                        </InputwIcon>
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className='actions'>
                        <PrimaryButton disabled={processing}>{t('ui.signup.btn')}</PrimaryButton>
                        <span>{t('ui.signup.have_an_account')}</span>
                        <Link href={route('home')}>
                            {t('ui.signup.signin')}
                        </Link>
                    </div>
                </form>
            </div>
        </Frontend>
    );
}   