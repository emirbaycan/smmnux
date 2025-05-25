import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import InputBox from '@/Components/Frontend/General/InputBox';
import SecondaryButton from '@/Components/SecondaryButton';
import { MdClose } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Updates({ auth }: PageProps) {
    const { t } = useTranslation();
    return (
        <UserLayout
        className='updates'
            user={auth.user}
        >
            <Head title={t('panel.header.updates.head')} />
            <InputBox>
                <InputBox.Icon>
                    <FaMagnifyingGlass></FaMagnifyingGlass>
                </InputBox.Icon>
                <InputBox.Input
                    id='search'
                    name='search'
                    placeholder={t('panel.general.search')}
                ></InputBox.Input>
                <InputBox.Button>
                    <SecondaryButton>
                        <MdClose></MdClose>
                    </SecondaryButton>
                </InputBox.Button>
            </InputBox>
        </UserLayout>
    );
}  