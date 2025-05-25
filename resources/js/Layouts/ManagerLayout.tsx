import { PropsWithChildren, useState } from 'react';
import Navbar from '../Components/Backend/User/Navbar';
import './UserLayout.scss'
import { User } from '@/types';

export default function ManagerLayout({ className = '', user, children }: PropsWithChildren<{ user: User, className: string | undefined }>) {
    const [lightMode, setLightMode] = useState(true);
    function toogleLightMode() {
        setLightMode(!lightMode);
    }
    return (
        <div className={'manager page ' + (lightMode ? 'light' : 'dark')}>
            <Navbar toogleLightMode={toogleLightMode}></Navbar>
            <div className={'page-inner ' + className}>
                {children}  
            </div>
        </div>
    );
}
