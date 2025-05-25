import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import InputBox from '@/Components/Frontend/General/InputBox';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import OrderStatuses from '@/Components/Backend/User/Orders/OrderStatuses';
import './Orders.scss';
import OrderHistory from '@/Components/Backend/User/Orders/OrderHistory';

export default function Orders({ auth }: PageProps) {
    const { t } = useTranslation();
    return (
        <UserLayout
            className='orders'
            user={auth.user}
        >
            <Head title={t('panel.header.orders.head')} />
            <div className='search'>
                <InputBox>
                    <InputBox.Icon>
                        <FaMagnifyingGlass></FaMagnifyingGlass>
                    </InputBox.Icon>
                    <InputBox.Input
                        id='search'
                        name='search'
                        placeholder='Search'
                        type='input'
                    ></InputBox.Input>
                    <InputBox.Button>
                        <PrimaryButton>{t('panel.general.search')}</PrimaryButton>
                    </InputBox.Button>
                </InputBox>
            </div>
            <OrderStatuses></OrderStatuses>
            <OrderHistory></OrderHistory>
        </UserLayout>
    );
}

function Category() {

}