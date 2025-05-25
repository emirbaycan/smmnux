import { useTranslation } from "react-i18next";
import Article from "../Blog/Article";

export default function Blog({ posts }: { posts: Array<any> }) {
    const { t } = useTranslation();
    return (
        <div className='blog'>
            <div className="section">
                <h3 className="header">{t('ui.home.blogs.header')}</h3>
                <ul className="items">
                    {posts && posts.map((item: any) => (
                        <Article
                            key={item.id}
                            head={item.head}
                            desc={item.desc}
                            slug={item.slug}
                            img={'http://[::1]:5173//resources/js/assets/blog/blog1.webp'} ></Article>
                    ))}
                </ul>
            </div>
        </div >
    )
}
