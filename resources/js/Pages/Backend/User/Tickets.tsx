import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Box, BoxTextInfo, BoxesCol } from '@/Components/Backend/User/General/Box';
import './Tickets.scss';
import Navbox from '@/Components/Backend/User/General/Navbox';
import { FaBorderAll, FaCartArrowDown, FaCog, FaEllipsisH, FaExclamationTriangle, FaFileAlt, FaHandHoldingUsd, FaShoppingBag } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';
import InputwLabel from '@/Components/Backend/General/InputwLabel';
import TextareawLabel from '@/Components/Backend/General/TextareaLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Tselect } from '@/types/backend';
import { OrderTicket } from '@/Components/Backend/User/Tickets/OrderTicket';
import { PaymentTİcket } from '@/Components/Backend/User/Tickets/PaymentTicket';
import { ChildPanelTicket } from '@/Components/Backend/User/Tickets/ChildPanelTicket';
import { ApiTicket } from '@/Components/Backend/User/Tickets/ApiTicket';
import { BugTicket } from '@/Components/Backend/User/Tickets/BugTicket';
import { RequestTicket } from '@/Components/Backend/User/Tickets/RequestTicket';
import { OtherTicket } from '@/Components/Backend/User/Tickets/OtherTİcket';

export default function Tickets({ auth }: PageProps) {
    const { t } = useTranslation();
    return (
        <UserLayout
            className='tickets'
            user={auth.user}
        >
            <Head title={t('panel.header.tickets.head')} />
            <BoxesCol>
                <Box>
                    <BoxTextInfo><Trans>{t('panel.get_support.info')}</Trans></BoxTextInfo>
                    <Navbox callback={() => { }}>
                        <Navbox.Navs>
                            <Navbox.Nav index={0} label=''>
                                <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.header')}</span>
                            </Navbox.Nav>
                            <Navbox.Nav index={1} label=''>
                                <span className='nav-header'>{t('panel.get_support.tickets.your_ticket.header')}</span>
                            </Navbox.Nav>
                            <Navbox.Nav index={2} label=''>
                                <span className='nav-header'>{t('panel.get_support.tickets.vote.header')}</span>
                            </Navbox.Nav>
                        </Navbox.Navs>
                        <Navbox.Contents>
                            <Navbox.Content index={0}>
                                <Navbox callback={() => { }}>
                                    <Navbox.Navs>
                                        <Navbox.Nav index={0} label=''>
                                            <FaCartArrowDown></FaCartArrowDown>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.order')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={1} label=''>
                                            <FaHandHoldingUsd></FaHandHoldingUsd>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.payment')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={2} label=''>
                                            <FaBorderAll></FaBorderAll>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.child_panel')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={3} label=''>
                                            <FaCog></FaCog>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.api')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={4} label=''>
                                            <FaExclamationTriangle></FaExclamationTriangle>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.bug')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={5} label=''>
                                            <FaFileAlt></FaFileAlt>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.request')}</span>
                                        </Navbox.Nav>
                                        <Navbox.Nav index={6} label=''>
                                            <FaEllipsisH></FaEllipsisH>
                                            <span className='nav-header'>{t('panel.get_support.tickets.new_ticket.other')}</span>
                                        </Navbox.Nav>
                                    </Navbox.Navs>
                                    <Navbox.Contents>
                                        <Navbox.Content index={0}>
                                            <OrderTicket></OrderTicket>
                                        </Navbox.Content>
                                        <Navbox.Content index={1}>
                                            <PaymentTİcket></PaymentTİcket>
                                        </Navbox.Content>
                                        <Navbox.Content index={2}>
                                            <ChildPanelTicket></ChildPanelTicket>
                                        </Navbox.Content>
                                        <Navbox.Content index={3}>
                                            <ApiTicket></ApiTicket>
                                        </Navbox.Content>
                                        <Navbox.Content index={4}>
                                            <BugTicket></BugTicket>
                                        </Navbox.Content>
                                        <Navbox.Content index={5}>
                                            <RequestTicket></RequestTicket>
                                        </Navbox.Content>
                                        <Navbox.Content index={6}>
                                            <OtherTicket></OtherTicket>
                                        </Navbox.Content>
                                    </Navbox.Contents>
                                </Navbox>
                            </Navbox.Content>
                            <Navbox.Content index={1}>
                                
                            </Navbox.Content>
                            <Navbox.Content index={2}>

                            </Navbox.Content>
                        </Navbox.Contents>
                    </Navbox>
                </Box>
            </BoxesCol>
        </UserLayout >
    );
}  