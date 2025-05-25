import { useTranslation } from "react-i18next";
import { Link, InertiaLinkProps } from '@inertiajs/react';
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
import { Tooltip } from "devextreme-react";
import { PiCoinsThin, PiWallet } from "react-icons/pi";
import { MdDashboard, MdFileCopy, MdHistory, MdManageAccounts, MdOutlineNotifications, MdUpdate, MdViewList } from "react-icons/md";
import { Tselect } from "@/types/backend";
import { BiHelpCircle, BiPlus, BiPlusCircle, BiSolidUserAccount } from "react-icons/bi";
import { AllHTMLAttributes, Dispatch, PropsWithChildren, SetStateAction } from "react";
import Dropdown from "@/Components/General/Dropdown";
import DropdownSelect from "@/Components/General/DropdownSelect";
import { FiLifeBuoy } from "react-icons/fi";
import { IoCubeOutline, IoSync } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import './Navbar.scss'
import { useCurrency } from "@/CurrencyContext";

function Navbar({ toogleLightMode }: { toogleLightMode: () => void }) {

    const { t } = useTranslation();
    const { currency, setCurrency } = useCurrency();
    const { symbol, setSymbol } = useCurrency();

    const options: Array<Tselect> = t("panel.header.currencies.items", { returnObjects: true });

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="top">
                    <a href="/" className="logo">
                        <span className="text">{t('ui.brandname')}</span>
                    </a>
                    <div className="inner">
                        <NavItem onClick={() => toogleLightMode()}>
                            <CiSettings id="theme_switcher"></CiSettings>
                            <Tooltip
                                target="#theme_switcher"
                                showEvent="dxhoverstart"
                                hideEvent="dxhoverend">
                                {t('panel.header.theme')}
                            </Tooltip>
                        </NavItem>
                        <NavItem>
                            <NavIconLink head={t('panel.header.add_funds.head')} link={t('panel.header.add_funds.link')}>
                                <PiWallet></PiWallet>
                            </NavIconLink>
                        </NavItem>
                        <NavItem>
                            <NavIconLink head={t('panel.header.notifications.head')} link={t('panel.header.notifications.link')}>
                                <MdOutlineNotifications></MdOutlineNotifications>
                            </NavIconLink>
                        </NavItem>
                        <NavItem>
                            <NavIconUrl head={t('panel.header.telegram.head')} link={t('panel.header.telegram.link')}>
                                <FaTelegramPlane></FaTelegramPlane>
                            </NavIconUrl>
                        </NavItem>
                        <NavItem>
                            <NavIconLink head={t('panel.header.account.head')} link={t('panel.header.account.link')}>
                                <CiUser></CiUser>
                            </NavIconLink>
                        </NavItem>
                        <NavItem>
                            <div id="currencies_link" className="currency">
                                <DropdownSelect callback={() => { }}>
                                    <DropdownSelect.HeaderHolder>
                                        <PiCoinsThin></PiCoinsThin>
                                        <DropdownSelect.Header>
                                            <div id="currencies_link">
                                                {currency}
                                            </div>
                                        </DropdownSelect.Header>
                                    </DropdownSelect.HeaderHolder>
                                    <DropdownSelect.Items>
                                        {options.map((option: Tselect, index: number) => (
                                            <DropdownSelect.Item
                                                key={index}
                                                index={index}
                                                value={option.value}
                                                onClick={() => { setCurrency(option.label); setSymbol(option.value) }}>
                                                {option.label}
                                            </DropdownSelect.Item>
                                        ))}
                                    </DropdownSelect.Items>
                                </DropdownSelect>
                            </div>
                        </NavItem>
                        <NavItem>
                            <a href={route(t('panel.header.logout.link'))}>
                                <CiLogout id='logout_link'></CiLogout>
                                <Tooltip
                                    target="#logout_link"
                                    showEvent="dxhoverstart"
                                    hideEvent="dxhoverend">
                                    {t('panel.header.logout.head')}
                                </Tooltip>
                            </a>
                        </NavItem>
                    </div>
                </div>
                <div className="bottom">
                    <div className="inner">
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.new_order.head')}
                                link={t('panel.header.new_order.link')}>
                                <BiPlusCircle></BiPlusCircle>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.orders.head')}
                                link={t('panel.header.orders.link')}>
                                <MdHistory></MdHistory>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.services.head')}
                                link={t('panel.header.services.link')}>
                                <MdViewList></MdViewList>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.deposit.head')}
                                link={t('panel.header.deposit.link')}>
                                <MdManageAccounts></MdManageAccounts>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.child_panels.head')}
                                link={t('panel.header.child_panels.link')}>
                                <MdManageAccounts></MdManageAccounts>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <NavIconPageLink
                                head={t('panel.header.tickets.head')}
                                link={t('panel.header.tickets.link')}>
                                <FiLifeBuoy></FiLifeBuoy>
                            </NavIconPageLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown>
                                <Dropdown.Header>
                                    <a>
                                        <BiPlus></BiPlus>
                                        <span>{t('panel.header.more')}</span>
                                    </a>
                                </Dropdown.Header>

                                <Dropdown.Items>
                                    <Dropdown.Item key={0} index={0}>
                                        <NavIconPageLink
                                            head={t('panel.header.dashboard.head')}
                                            link={t('panel.header.dashboard.link')}>
                                            <MdDashboard></MdDashboard>
                                        </NavIconPageLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item key={1} index={1}>
                                        <NavIconPageLink
                                            head={t('panel.header.create_invoice.head')}
                                            link={t('panel.header.create_invoice.link')}>
                                            <MdFileCopy></MdFileCopy>
                                        </NavIconPageLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item key={2} index={2}>
                                        <NavIconPageLink
                                            head={t('panel.header.faq.head')}
                                            link={t('panel.header.faq.link')}>
                                            <BiHelpCircle></BiHelpCircle>
                                        </NavIconPageLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item key={3} index={3}>
                                        <NavIconPageLink
                                            head={t('panel.header.api.head')}
                                            link={t('panel.header.api.link')}>
                                            <IoCubeOutline></IoCubeOutline>
                                        </NavIconPageLink>
                                    </Dropdown.Item>
                                </Dropdown.Items>
                            </Dropdown>
                        </NavItem>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavItem({ children, ...props }: PropsWithChildren & AllHTMLAttributes<HTMLDivElement>) {
    return (
        <div className="item" {...props}>
            {children}
        </div>
    );
}

function NavToolTip({ head = '', link = '' }: PropsWithChildren & { head: string, link: string }) {
    return (
        <Tooltip
            target={"#" + link + "_link"}
            showEvent="dxhoverstart"
            hideEvent="dxhoverend">
            {head}
        </Tooltip>
    );
}

function NavIconPageLink({ head = '', link = '', children }: PropsWithChildren & { head: string, link: string }) {
    return (
        <NavLink
            className="link"
            href={route(link)}
            active={route().current(link)}>
            {children}
            <span>{head}</span>
        </NavLink>
    );
}

function NavIconLink({ head = '', link = '', children }: PropsWithChildren & { head: string, link: string }) {
    return (
        <NavLink
            className="link"
            id={link + "_link"}
            href={route(link)}
            active={route().current(link)}>
            {children}
            <NavToolTip head={head} link={link} />
        </NavLink>
    );
}


function NavIconUrl({ head = '', link = '', children }: PropsWithChildren & { head: string, link: string }) {
    return (
        <a
            className="link"
            href={link}
            id={link + "_link"}>
            {children}
            <NavToolTip head={head} link={link} />
        </a>
    );
}

function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                '' +
                (active
                    ? 'active '
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}


export default Navbar;