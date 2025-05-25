import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend';

export default function Signin({ auth }: PageProps) { 
    return (
        <Frontend className='signin'>
            <Head title="Signin" />
        </Frontend>
    );
}   