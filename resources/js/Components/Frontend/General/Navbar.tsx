import { useTranslation } from "react-i18next";
import { Link, InertiaLinkProps } from '@inertiajs/react';
import PrimaryButton from "../../PrimaryButton";
import type { LinkType } from "@/types";

function Navbar() {
    const { t } = useTranslation();
    const nav_links: Array<LinkType> = t("ui.header.links", { returnObjects: true });
    return (
        <nav className="navbar">
            <div className="inner">
                <a href="/" className="logo">
                    <span className="text">{t('ui.brandname')}</span>
                </a>
                <ul className="links" id="navbar-default">
                    {nav_links.map((nav_link: LinkType, index: number) => (
                        <li key={index} className="link-holder">
                            <NavLink key={nav_link.url}
                                href={route(nav_link.url)}
                                active={route().current(nav_link.url)}
                                children={nav_link.name} />
                        </li>
                    ))}
                </ul>
                <PrimaryButton className="link">
                    <NavLink href={route('signup')} active={route().current('signup')}>
                        {t("ui.header.btn")}
                    </NavLink>
                </PrimaryButton>
            </div>
        </nav>
    );
}

function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'link ' +
                (active
                    ? 'active'
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}


export default Navbar;