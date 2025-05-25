import Navbar from '@/Components/Frontend/General/Navbar';
import { PropsWithChildren } from 'react';
import Footer from '@/Components/Frontend/General/Footer';
import './Frontend.scss'

export default function Frontend({ className = '', children }: PropsWithChildren & { className: string }) {
    return (
        <div className='frontend'>
            <Navbar></Navbar>
            <div className={'page ' + className}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
}
