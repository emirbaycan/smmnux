import { Head } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Box, BoxHeader } from '@/Components/Backend/User/General/Box';
import InputBox from '@/Components/Frontend/General/InputBox';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SecondaryButton from '@/Components/SecondaryButton';
import { MdClose } from 'react-icons/md';
import Faqs from '@/Components/Backend/User/ChildPanels/Faqs';
import './Faq.scss';
import { SetStateAction, useState } from 'react';

export default function Faq({ auth }: PageProps) {
    const { t } = useTranslation();
    const items: Array<TItem> = t("panel.faq.questions", { returnObjects: true });
    const [search, setSearch] = useState('');
    return (
        <UserLayout
            className='faq'
            user={auth.user}
        >
            <Head title={t('panel.faq.title')} />
            <Box>
                <BoxHeader>{t('panel.faq.header')}</BoxHeader>
                <InputBox>
                    <InputBox.Icon>
                        <FaMagnifyingGlass></FaMagnifyingGlass>
                    </InputBox.Icon>
                    <InputBox.Input
                        id='issue'
                        name='issue'
                        placeholder={t('panel.faq.describe')}
                        onChange={({ target }) => setSearch(target.value)}
                    ></InputBox.Input>
                    <InputBox.Button>
                        <SecondaryButton>
                            <MdClose></MdClose>
                        </SecondaryButton>
                    </InputBox.Button>
                </InputBox>
            </Box>
            <Faqs>
                {items.filter(item => item.head?.includes(search) || item.desc?.includes(search)).map((item: TItem, index: number) => (
                    <Faqs.Item key={index} head={item.head} desc={item.desc} index={index}></Faqs.Item>
                ))}
            </Faqs>
        </UserLayout>
    );
}  