import { FaAudible, FaFacebook, FaInstagram, FaLinkedin, FaSoundcloud, FaSpotify, FaStarOfLife, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Dispatch, InputHTMLAttributes, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import './OrderCategories.scss'

const orderCategoryContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 1,
    setOpen: () => { }
});

export default function OrderCategories({ general_category, setGeneralCategory }: InputHTMLAttributes<HTMLDivElement> & { general_category: string, setGeneralCategory: Dispatch<SetStateAction<string>> }) {
    const [open, setOpen] = useState(1);

    return (
        <orderCategoryContext.Provider value={{ open, setOpen }}>
            <div id="category" className='order-categories' data-row="4" data-category={general_category}>
                <Category name='Instagram' value={1} setGeneralCategory={setGeneralCategory}>
                    <FaInstagram></FaInstagram>
                </Category>
                <Category name='Facebook' value={2} setGeneralCategory={setGeneralCategory}>
                    <FaFacebook></FaFacebook>
                </Category>
                <Category name='Youtube' value={3} setGeneralCategory={setGeneralCategory}>
                    <FaYoutube></FaYoutube>
                </Category>
                <Category name='Twitter' value={4} setGeneralCategory={setGeneralCategory}>
                    <FaTwitter></FaTwitter>
                </Category>
                <Category name='Spotify' value={5} setGeneralCategory={setGeneralCategory}>
                    <FaSpotify></FaSpotify>
                </Category>
                <Category name='Tiktok' value={6} setGeneralCategory={setGeneralCategory}>
                    <FaTiktok></FaTiktok>
                </Category>
                <Category name='Linkedin' value={7} setGeneralCategory={setGeneralCategory}>
                    <FaLinkedin></FaLinkedin>
                </Category>
                <Category name='Soundcloud' value={8} setGeneralCategory={setGeneralCategory}>
                    <FaSoundcloud></FaSoundcloud>
                </Category>
                <Category name='Telegram' value={9} setGeneralCategory={setGeneralCategory}>
                    <FaTelegram></FaTelegram>
                </Category>
                <Category name='Website Traffic' value={10} setGeneralCategory={setGeneralCategory}>
                    <TbWorldWww></TbWorldWww>
                </Category>
                <Category name='Other' value={11} setGeneralCategory={setGeneralCategory}>
                    <FaStarOfLife></FaStarOfLife>
                </Category>
                <Category name='Everything' value={12} setGeneralCategory={setGeneralCategory}>
                    <FaAudible></FaAudible>
                </Category>
            </div>
        </orderCategoryContext.Provider >

    );
}

function Category({ name = '', value = 0, setGeneralCategory, children }: PropsWithChildren & InputHTMLAttributes<HTMLDivElement> & { name: string, value: number, setGeneralCategory: Dispatch<SetStateAction<string>> }) {
    const { open, setOpen } = useContext(orderCategoryContext);

    return (
        <div className={"category " + (open == value ? 'open' : '')}
            onClick={(event) => { setOpen(value); setGeneralCategory(name) }}
            data-value={value}
        >
            {children}
            <div className="name">
                {name}
            </div>
        </div>
    )
}