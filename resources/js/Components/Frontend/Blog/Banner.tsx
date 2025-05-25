import { useTranslation } from "react-i18next"

export default function Banner(){
    const {t} = useTranslation();
    return(
        <div className='blog-banner'>
            <div className="blog-banner-bg"></div>
            <div className="blog-banner-inner">
                <h1>{t('ui.blog.header')}</h1>
                <p>{t('ui.blog.content')}</p>
            </div>
        </div>
    )
}
 