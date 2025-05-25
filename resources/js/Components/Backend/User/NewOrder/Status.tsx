import { Link } from "@inertiajs/react";
import { FaDollarSign, FaUserPlus } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { TbBasketCheck } from "react-icons/tb";
import { Boxes, Box } from "../General/Box";
import { useTranslation } from "react-i18next";
import './Status.scss';

export default function Status({ order_count = 0, spent = 0, balance = 0, points = 0, status = '' }) {
    const { t } = useTranslation();

    return (
        <div className='status'>
            <Boxes>
                <Box>
                    <div className='icon'>
                        <TbBasketCheck></TbBasketCheck>
                    </div>
                    <div className='content'>
                        <div className='head'>{t('panel.new_order.infos.total_orders.head')}</div>
                        <div className='cap'>{order_count}</div>
                        <div className='desc'>{t('panel.new_order.infos.total_orders.desc')}                    </div>
                    </div>
                </Box>
                <Box>
                    <div className='icon'>
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className='content'>
                        <div className='head'>{t('panel.new_order.infos.balance.head')}</div>
                        <div className='cap'>{spent}</div>
                        <div className='desc'>{t('panel.new_order.infos.balance.desc') + balance}</div>
                        <Link href={route(t('panel.new_order.infos.balance.link'))}>
                            {t('panel.new_order.deposit_more')}
                        </Link>
                    </div>
                </Box>
                <Box>
                    <div className='icon'>
                        <GrValidate></GrValidate>
                    </div>
                    <div className='content'>
                        <div className='head'>{t('panel.new_order.infos.points.head')}</div>
                        <div className='cap'>{points}</div>
                        <div className='desc'>{t('panel.new_order.infos.points.desc')}</div>
                        <Link href={route(t('panel.new_order.infos.points.link'))}>
                            {t('panel.new_order.click_here')}
                        </Link>
                    </div>
                </Box>
                <Box>
                    <div className='icon'>
                        <FaUserPlus></FaUserPlus>
                    </div>
                    <div className='content'>
                        <div className='head'>{t('panel.new_order.infos.status.head')}</div>
                        <div className='cap'>{status}</div>
                        <div className='desc'>{t('panel.new_order.infos.status.desc')}</div>
                        <Link href={route(t('panel.new_order.infos.points.link'))}>
                            {t('panel.new_order.click_here')}
                        </Link>
                    </div>
                </Box>
            </Boxes>
        </div>);

}