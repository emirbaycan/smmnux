import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Link } from "@inertiajs/react";
import CheckBox from "../General/CheckBox";
import { useTranslation } from "react-i18next";
import InputwIcon from "../General/InputwIcon";
import { FormEventHandler, useEffect } from "react";
import { FaLock, FaUser } from "react-icons/fa";

export default function Signin() {

    var remember = false;
    var username: string | null = '';

    useEffect(() => {
        if (localStorage.getItem('rememberMe') === '1') {
            username = localStorage.getItem('username');
            remember = true;
        }
    }, [])

    const { data, setData, post, processing, errors, reset } = useForm({
        username: username ? username : '',
        password: '',
        remember: remember,
    });

    const { t } = useTranslation();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('signin'));
    };

    return (
        <div className='signin banner-part'>
            <h1 className="header">
                {t('ui.home.banner.header')}
            </h1>
            <p className="text">
                {t('ui.home.banner.content')}
            </p>
            <form onSubmit={submit} className="signin-form">
                <InputwIcon
                    autoComplete="user"
                    placeholder={t('ui.home.signin.username')}
                    id='username'
                    name='username'
                    type='text'
                    value={data.username}
                    onChange={(e) => { setData('username', e.target.value); localStorage.setItem('username', e.target.value) }}>
                    <FaUser></FaUser>
                </InputwIcon>
                <InputwIcon
                    placeholder={t('ui.home.signin.password')}
                    id='password'
                    name='password'
                    type='password'
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}>
                    <FaLock></FaLock>
                </InputwIcon>
                <div className='actions'>
                    <CheckBox
                        name="remember"
                        title={t('ui.home.signin.remember_me')}
                        checked={data.remember ? data.remember : remember}
                        onChange={(e) => { setData('remember', e.target.checked); localStorage.setItem('rememberMe', e.target.checked ? '1' : '0') }}></CheckBox>
                    <Link href={route('reset-password')}></Link>
                </div>
                <div className='actions'>
                    <PrimaryButton disabled={processing}>
                        {t('ui.home.signin.signin_btn')}
                    </PrimaryButton>
                    <p className="text">{t('ui.home.signin.have_an_account')} </p>
                    <Link href={route('signup')}>
                        {t('ui.home.signin.signup_btn')}
                    </Link>
                </div>
            </form>
        </div>
    )
}
