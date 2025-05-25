import { IconType } from 'react-icons/lib';

export interface User {
    id: number;
    user_rank: number;
    username: string;
    fullname: string;
    email: string;
    email_verified_at: string;
    skype: string;
    whatsapp: string;
    telegram: string;
}

export interface Post {
    id: number;
    writer_id: number;
    visible: number;
    head: string;
    desc: string;
    image: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: number;
    parent_category: number;
    category: string;
    type: string;
    name: string;
    rate: number;
    min: number;
    max: number;
    dripfeed: boolean;
    refill: boolean;
    cancel: boolean;
    desc: string;
}

export interface ServiceCategories {
    service_category_id: number;
    name: string;
}

export interface Order {
    id: number;
    service: number;
    link: string;
    status: number;
    charge: number;
    quantity: number;
    details: string;
}

export interface Payment {
    id: number;
    provider: number;
    status: number;
    amount: number;
    paid_at: string;
    details: string;
}

export type LinkType = {
    url: string;
    name: string;
};

export type TItem = {
    head?: string;
    desc?: string;
};

export type ItemwImage = {
    head?: string;
    desc?: string;
    img: string;
};

export type Article = {
    slug?: string;
    head?: string;
    desc?: string;
    img: string;
};

export type ItemwButton = {
    head?: string;
    desc?: string;
    btn: string;
};

export type InputwIconType = {
    placeholder?: string;
    name?: string;
    icon?: string;
};

export type ItemwIcon = {
    head?: string;
    desc?: string;
    Icon: IconType;
};

export type ItemwTheme = {
    theme?: string;
    head?: string;
    desc?: string;
};

export type TStatus = {
    id?: number;
    name?: string;
    icon?: IconType;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
