import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend';
import Steps from '@/Components/Frontend/Howitworks/Steps';
import './Howitworks.scss';

export default function Howitworks({ auth }: PageProps) {
    return (
        <Frontend className='howitworks'>
            <Head title="How it works" />
            <div className='section'>
                <Steps></Steps> 
            </div>
        </Frontend>
    );
} 