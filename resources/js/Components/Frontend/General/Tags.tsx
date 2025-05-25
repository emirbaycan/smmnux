import { Head} from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import favicon from '../../../assets/general/favicon.ico';

export default function Tags({ title='', children='' }: PropsWithChildren & {title:string}) {
    return (
        <Head title={title}>
            <link rel="icon" type="image/x-icon" href={favicon} />
            {children}
        </Head>
    );
}
