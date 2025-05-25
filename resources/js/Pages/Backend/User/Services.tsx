import { Head } from '@inertiajs/react';
import { PageProps, Service } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import OrderCategories from '@/Components/Backend/User/NewOrder/OrderCategories';
import InputBox from '@/Components/Frontend/General/InputBox';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import ServicesTables from '@/Components/Backend/User/Services/ServicesTable';
import { useState } from 'react';
import './Services.scss';

export default function Services({ auth, data = [] }: PageProps & { data: Array<Service> }) {
    const { t } = useTranslation();
    const [general_category, setGeneralCategory] = useState('Instagram');
    const [search, setSearch] = useState('');

    return (
        <UserLayout
            className='services'
            user={auth.user}
        >
            <Head title="Services" />
            <OrderCategories
                general_category={general_category}
                setGeneralCategory={setGeneralCategory}></OrderCategories>
            <InputBox>
                <InputBox.Icon>
                    <FaMagnifyingGlass></FaMagnifyingGlass>
                </InputBox.Icon>
                <InputBox.Input
                    id='search'
                    name='search'
                    placeholder='Search'
                    type='input'
                    onChange={(e) => { setSearch(e.target.value) }}
                ></InputBox.Input>
                <InputBox.Button>
                    <PrimaryButton>{t('panel.general.search')}</PrimaryButton>
                </InputBox.Button>
            </InputBox>
            <ServicesTables
                search={search}
                general_category={general_category}
                data={data}
            ></ServicesTables>
        </UserLayout>
    );
}