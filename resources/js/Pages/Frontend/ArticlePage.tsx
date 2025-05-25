import { Head } from '@inertiajs/react';
import { PageProps, Post } from '@/types';
import Frontend from '@/Layouts/Frontend';
import Article from '@/Components/Frontend/Blog/Article';
import { useTranslation } from 'react-i18next';
import './ArticlePages.scss';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import blog_img from '../../assets/blog/blog-bg.png';

export default function ArticlePage({ article }: PageProps & { article: Post }) {
    const { t } = useTranslation();

    return (
        <Frontend className='article-page'>
            <Head title={article.head} />
            <div className='section'>
                <div className='article-page-inner'>
                    <div className='header'>{article.head}</div>
                    <div className='img' style={{ backgroundImage: 'url(' + blog_img + ')' }}></div>
                    <div className='content'>{article.body}</div>
                    <PrimaryButton><a href={route('blog')}>{t('ui.article_page.back')}</a></PrimaryButton>
                </div>
            </div>
        </Frontend>
    );
}
 