import { Head } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Video } from '@/Components/Backend/User/ChildPanels/Video';
import { Box, Boxes, BoxTextInfo } from '@/Components/Backend/User/General/Box';
import { BiWorld } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { MdFace, MdLock } from 'react-icons/md';
import Faqs from '@/Components/Backend/User/ChildPanels/Faqs';
import InputwLabel from '@/Components/Backend/General/InputwLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import './ChildPanels.scss';

export default function ChildPanels({ auth }: PageProps) {
    const { t } = useTranslation();
    const items: Array<TItem> = t("ui.services.items", { returnObjects: true });
    return (
        <UserLayout
            className='childpanels'
            user={auth.user}
        >
            <Head title={t('panel.header.child_panels.head')} />
            <Video src={t('panel.child_panels.video_url')}></Video>
            <div className='steps'>
                <Boxes>
                    <Box>
                        <div className='icon'>
                            <BiWorld></BiWorld>
                        </div>
                        <div className='content'>
                            <div className='head'>{t('panel.child_panels.steps.0.head')}</div>
                            <div className='desc'>{t('panel.child_panels.steps.0.desc')}</div>
                        </div>
                    </Box>
                    <Box>
                        <div className='icon'>
                            <FaDollarSign></FaDollarSign>
                        </div>
                        <div className='content'>
                            <div className='head'>{t('panel.child_panels.steps.1.head')}</div>
                            <div className='desc'>{t('panel.child_panels.steps.1.desc')}</div>
                        </div>
                    </Box>
                    <Box>
                        <div className='icon'>
                            <MdFace></MdFace>
                        </div>
                        <div className='content'>
                            <div className='head'>{t('panel.child_panels.steps.2.head')}</div>
                            <div className='desc'>{t('panel.child_panels.steps.2.desc')}</div>
                        </div>
                    </Box>
                    <Box>
                        <div className='icon'>
                            <MdLock></MdLock>
                        </div>
                        <div className='content'>
                            <div className='head'>{t('panel.child_panels.steps.3.head')}</div>
                            <div className='desc'>{t('panel.child_panels.steps.3.desc')}</div>
                        </div>
                    </Box>
                </Boxes>
            </div>
            <BoxTextInfo>
                {t('panel.child_panels.info')}
            </BoxTextInfo>
            <div className='cp-forms'>
                <Box>
                    <form className='form'>
                        <div className='part'>
                            <InputwLabel
                                id='domain'
                                name='domain'
                                title={t('panel.child_panels.domain')}
                                type='input'
                            ></InputwLabel>
                            <div className='info-box'>
                                <Trans>{t('panel.child_panels.ns_info')}</Trans>
                            </div>
                        </div>
                        <div className='part'>
                            <InputwLabel
                                id='currency'
                                name='currency'
                                title={t('panel.child_panels.currency')}
                                type='input'
                            ></InputwLabel>
                            <div className='info-box'>
                                <Trans>{t('panel.child_panels.currency_info')}</Trans>
                            </div>
                        </div>
                        <div className='part'>
                            <InputwLabel
                                id='admin_username'
                                name='admin_username'
                                title={t('panel.child_panels.admin_username')}
                                type='input'
                            ></InputwLabel>
                            <InputwLabel
                                id='admin_password'
                                name='admin_password'
                                title={t('panel.child_panels.admin_password')}
                                type='input'
                            ></InputwLabel>
                        </div>
                        <div className='part'>
                            <InputwLabel
                                id='price'
                                name='price'
                                title={t('panel.child_panels.price_per_month')}
                                type='text'
                                disabled
                            ></InputwLabel>
                            <PrimaryButton>{t('panel.child_panels.submit_order')}</PrimaryButton>
                        </div>
                    </form>
                </Box>
            </div>
            <Faqs>
                {items.map((service: TItem, index: number) => (
                    <Faqs.Item key={index} head={service.head} desc={service.desc} index={index}></Faqs.Item>
                ))}
            </Faqs>
        </UserLayout>
    );
}  