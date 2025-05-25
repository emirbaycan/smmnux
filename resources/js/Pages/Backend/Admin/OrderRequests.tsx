import { PageProps } from '@/types';
import { useTranslation } from 'react-i18next';
import './OrderRequests.scss';
import ManagerLayout from '@/Layouts/ManagerLayout';
 

export default function Account({ auth }: PageProps) {
    const { t } = useTranslation(); 

    return (
        <ManagerLayout
            className='account'
            user={auth.user}
        > 
        
        </ManagerLayout>
    );
}