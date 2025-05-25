import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend';
import Article from '@/Components/Frontend/Blog/Article';
import { useTranslation } from 'react-i18next';
import './Blog.scss';
import { useState } from 'react';

export default function Blog({ data, count, limit = 10, start = 0 }: PageProps & { data: Array<any>, count: number, limit: number, start: number }) {
    const { t } = useTranslation();
    const [offset, setOffset] = useState(start);
    const [stint, setStint] = useState(limit);
    const paginations = [];
    for (let index = 0; index <= count; index += +stint) {
        paginations.push(
            <li className={'pagination ' + ((+index == offset) ? 'active' : '')} >
                <a href={route('blog', {
                    start: index,
                    limit: limit
                })}>
                    {(index / stint) + 1}
                </a>
            </li>
        );
    }

    return (
        <Frontend className='blog'>
            <Head title="Blog" />
            <div className='blog-banner'>
                <div className='section'>
                    <h2 className='header'>{t('ui.blog.header')}</h2>
                    <p className='description'>{t('ui.blog.content')}</p>
                </div>
            </div>
            <div className='section'>
                <ul className='items'>
                    {data && data.map((item: any) => (
                        <Article
                            key={item.id}
                            head={item.head}
                            desc={item.desc}
                            slug={item.slug}
                            img={item.image} ></Article>
                    ))}
                </ul>
                <ul className='paginations'>
                    {paginations}
                </ul>
            </div>
        </Frontend>
    );
}
