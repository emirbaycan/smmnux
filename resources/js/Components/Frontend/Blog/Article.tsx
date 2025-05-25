import type { Article } from "@/types";
import { PropsWithChildren } from "react";
import blog_img from '../../../assets/blog/blog-bg.png';

export default function Article({ head = '', desc = '', slug = '', img = '' }: PropsWithChildren<Article>) {
    return (
        <a className="article" href={'/blog/' + slug}>
            <div className="img" style={{ backgroundImage: 'url(' + blog_img + ')' }}></div>
            <div className="content">
                <h3 className="head">{head}</h3>
                <p className="desc">{desc}</p>
            </div>
        </a>
    )
}
