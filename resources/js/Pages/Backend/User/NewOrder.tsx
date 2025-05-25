import { Head, useForm, usePage } from '@inertiajs/react';
import { PageProps, Service } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import Status from '@/Components/Backend/User/NewOrder/Status';
import OrderCategories from '@/Components/Backend/User/NewOrder/OrderCategories';
import Navbox from '@/Components/Backend/User/General/Navbox';
import { FaCartArrowDown, FaCheck, FaCopy, FaCrown, FaHandPointer, FaHeart, FaLayerGroup, FaPowerOff, FaSearch, FaShoppingBag, FaSkype } from 'react-icons/fa';
import InputwLabel from '@/Components/Backend/General/InputwLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Box, Boxes } from '@/Components/Backend/User/General/Box';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail, MdOutlineTimer } from 'react-icons/md';
import Iconized from '@/Components/Backend/User/NewOrder/Iconized';
import { FiLifeBuoy } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';
import { BiDetail } from 'react-icons/bi';
import { FormEventHandler, useState } from 'react';
import MultiDropdown from '@/Components/Backend/User/NewOrder/MultiDropdown';
import TextareawLabel from '@/Components/Backend/General/TextareaLabel';
import { useCurrency } from '@/CurrencyContext';

import './NewOrder.scss';

export default function NewOrder({ auth, services = [], currencies }: PageProps & { services: Array<Service>, currencies: any }) {
    const { t } = useTranslation();
    const [general_category, setGeneralCategory] = useState('Everything');
    const { symbol, setSymbol, currency, setCurrency } = useCurrency();

    const exchange_rates = JSON.parse(currencies[0].rates);
    const { data, setData, post, processing, errors, reset } = useForm({
        service_id: '',
        link: '',
        quantity: 5,
        runs: 0,
        interval: 0,
        usernames: '',
        comments: '',
        hashtags: '',
        answer_number: '',
        charge: 0,
        mass_order: ''
    });

    const [service, setService] = useState({
        id: 1,
        type: 'Default',
        parent_category: 1,
        category: 'Cheapest Services',
        name: 'Telegram - Post Views ~ 100k/days ~ INSTANT',
        desc: '<p style="line-height: 20px;">Link: https://www.tiktok.com/@username OR @username<br>Start: 0-30 Min<br>Speed: 1k-50k/Day <br>Refill: No Refill<br><br>Note:<br>- Check the link format carefully before placing the order.<br>- Kindly make sure your account is public, Not private.<br>- When the service is busy, the starting speed of the operation changes.<br>- Do not place a second order on the same link before completing your order.</p>',
        rate: 0.0088,
        min: 10,
        max: 50000,
        dripfeed: false,
        refill: false,
        cancel: false
    });

    const submitOrder: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('new-order'));
    };

    return (
        <UserLayout
            user={auth.user}
            className='neworder'
        >
            <Head title="New Order" />
            <Status
                order_count={116299404}
                spent={0.00}
                points={0}
                balance={0}
                status={'NEW'}
            ></Status>
            <OrderCategories
                general_category={general_category}
                setGeneralCategory={setGeneralCategory}></OrderCategories>
            <p className='info'>{t('panel.new_order.info')}</p>
            <Boxes>
                <Box>
                    <Navbox callback={() => { }}>
                        <Navbox.Navs>
                            <Navbox.TooltipNav index={0} id='nav_new_order' label={t('panel.new_order.new_order')}>
                                <FaCartArrowDown></FaCartArrowDown>
                            </Navbox.TooltipNav>
                            <Navbox.TooltipNav index={1} id='nav_mass_order' label={t('panel.new_order.mass_orders.head')}>
                                <FaLayerGroup></FaLayerGroup>
                            </Navbox.TooltipNav>
                            <Navbox.TooltipNav index={2} id='nav_my_favorite' label={t('panel.new_order.my_favorite.head')}>
                                <FaHeart></FaHeart>
                            </Navbox.TooltipNav>
                            <Navbox.TooltipNav index={3} id='nav_frequent_orders' label={t('panel.new_order.frequent_orders.head')}>
                                <FaShoppingBag></FaShoppingBag>
                            </Navbox.TooltipNav>
                            <Navbox.TooltipNav index={4} id='nav_auto_subscriptions' label={t('panel.new_order.auto_subscriptions.head')}>
                                <FaHandPointer></FaHandPointer>
                            </Navbox.TooltipNav>
                        </Navbox.Navs>
                        <Navbox.Contents>
                            <Navbox.Content index={0}>
                                <form onSubmit={submitOrder}>
                                    <MultiDropdown
                                        services={services}
                                        service={service}
                                        setService={setService}
                                        general_category={general_category}></MultiDropdown>
                                    <InputwLabel
                                        id='link'
                                        name='link'
                                        title={t('panel.new_order.link')}
                                        value={data.link}
                                        type='text'
                                        onChange={(e) => setData('link', e.target.value)}></InputwLabel>
                                    <InputwLabel
                                        id='quantity'
                                        name='quantity'
                                        type='number'
                                        title={t('panel.new_order.quantity')}
                                        value={data.quantity}
                                        onChange={(e) => { setData('quantity', e.target.valueAsNumber); }}></InputwLabel>
                                    <TextareawLabel
                                        hidden={true}
                                        id='usernames'
                                        name='usernames'
                                        type='text'
                                        title={t('panel.new_order.usernames')}
                                        value={data.usernames}
                                        onChange={(e) => { setData('usernames', e.target.value) }}></TextareawLabel>
                                    <TextareawLabel
                                        hidden={true}
                                        id='comments'
                                        name='comments'
                                        type='text'
                                        title={t('panel.new_order.comments')}
                                        value={data.comments}
                                        onChange={(e) => { setData('comments', e.target.value) }}></TextareawLabel>
                                    <TextareawLabel
                                        hidden={true}
                                        id='hashtags'
                                        name='hashtags'
                                        type='text'
                                        title={t('panel.new_order.hashtags')}
                                        value={data.hashtags}
                                        onChange={(e) => { setData('hashtags', e.target.value) }}></TextareawLabel>
                                    <InputwLabel
                                        hidden={true}
                                        id='answer_number'
                                        name='answer_number'
                                        type='text'
                                        title={t('panel.new_order.answer_number')}
                                        value={data.answer_number}
                                        onChange={(e) => { setData('answer_number', e.target.value) }}></InputwLabel>
                                    <InputwLabel
                                        hidden={true}
                                        id='runs'
                                        name='runs'
                                        type='text'
                                        title={t('panel.new_order.runs')}
                                        value={data.runs}
                                        onChange={(e) => { setData('runs', e.target.valueAsNumber); }}></InputwLabel>
                                    <InputwLabel
                                        hidden={true}
                                        className='hidden'
                                        id='interval'
                                        name='interval'
                                        type='text'
                                        title={t('panel.new_order.interval')}
                                        value={data.interval}
                                        onChange={(e) => { setData('interval', e.target.valueAsNumber); }}></InputwLabel>
                                    <InputwLabel
                                        disabled
                                        type='text'
                                        id='charge'
                                        name='charge'
                                        title={t('panel.new_order.charge')}
                                        value={(service.rate * data.quantity * (currency != 'USD' ? exchange_rates[currency] : 1)) + ' ' + symbol}></InputwLabel>
                                    <PrimaryButton>
                                        <FaCheck></FaCheck>
                                        <span className='btn-label'>
                                            {t('panel.new_order.submit')}
                                        </span>
                                    </PrimaryButton>
                                </form>
                            </Navbox.Content>
                            <Navbox.Content index={1}>
                                <TextareawLabel
                                    id='mass_order'
                                    name='mass_order'
                                    type='text'
                                    title={t('panel.new_order.mass_orders.desc')}
                                    placeholder={t('panel.new_order.mass_orders.textarea_desc')}
                                    value={data.mass_order}
                                    onChange={(e) => { setData('mass_order', e.target.value) }}
                                ></TextareawLabel>
                            </Navbox.Content>
                            <Navbox.Content index={2}>

                            </Navbox.Content>
                            <Navbox.Content index={3}>

                            </Navbox.Content>
                            <Navbox.Content index={4}>

                            </Navbox.Content>
                        </Navbox.Contents>
                    </Navbox>
                </Box>
                <Box>
                    <Navbox callback={() => { }}>
                        <Navbox.Navs>
                            <Navbox.Nav index={0} label={t('panel.new_order.details.head')}>
                                <FaInstagram></FaInstagram>
                            </Navbox.Nav>
                            <Navbox.Nav index={1} label={t('panel.new_order.contact_us.head')}>
                                <MdEmail></MdEmail>
                            </Navbox.Nav>
                        </Navbox.Navs>
                        <Navbox.Contents>
                            <Navbox.Content index={0}>
                                <div className='details'>
                                    <Iconized
                                        id="example_link"
                                        head={t('panel.new_order.details.example_link')}
                                        desc='-'>
                                        <FaCopy></FaCopy>
                                    </Iconized>
                                    <div className='iconized-box'>
                                        <Iconized
                                            id='example_start_time'
                                            head={t('panel.new_order.details.start_time')}
                                            desc='-'>
                                            <FaPowerOff></FaPowerOff>
                                        </Iconized>
                                        <Iconized
                                            id="example_speed"
                                            head={t('panel.new_order.details.speed')}
                                            desc='-'>
                                            <LuRocket></LuRocket>
                                        </Iconized>
                                    </div>
                                    <div className='iconized-box'>
                                        <Iconized
                                            id='example_guaranteed'
                                            head={t('panel.new_order.details.guaranteed')}
                                            desc='-'>
                                            <FaCrown></FaCrown>
                                        </Iconized>
                                        <Iconized
                                            id='example_average_time'
                                            head={t('panel.new_order.details.average_time')}
                                            desc='-'>
                                            <MdOutlineTimer></MdOutlineTimer>
                                        </Iconized>
                                    </div>
                                    <Iconized
                                        id='example_description'
                                        head={t('panel.new_order.details.description')}
                                        desc='-'>
                                        <BiDetail></BiDetail>
                                    </Iconized>
                                </div>
                            </Navbox.Content>
                            <Navbox.Content index={1}>
                                <div className='contact-us'>
                                    <div className='info-box'>
                                        <Trans>
                                            {t('panel.new_order.contact_us.desc')}
                                        </Trans>
                                    </div>
                                    <div className='icon-head'>
                                        <FiLifeBuoy></FiLifeBuoy>
                                        <div className='head'>{t('panel.new_order.contact_us.support_ticket')}</div>
                                    </div>
                                    <PrimaryButton>{t('panel.new_order.contact_us.open_new_ticket')}</PrimaryButton>
                                    <div className='border-box'>
                                        <div className='icon-head'>
                                            <FaSkype></FaSkype>
                                            <div className='head'>{t('panel.new_order.contact_us.skype')}</div>
                                        </div>
                                        <div className='desc'>{t('panel.new_order.contact_us.skype_address')}</div>
                                    </div>
                                    <div className='icon-head'>
                                        <MdEmail></MdEmail>
                                        <div className='head'>{t('panel.new_order.contact_us.email')}</div>
                                    </div>
                                    <div className='desc'>{t('panel.new_order.contact_us.support_email')}</div>
                                </div>
                            </Navbox.Content>
                        </Navbox.Contents>
                    </Navbox>
                </Box>
            </Boxes>
        </UserLayout>
    );
}