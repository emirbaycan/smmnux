import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Box, BoxHeader, BoxTextInfo, Boxes } from '@/Components/Backend/User/General/Box';
import Navbox from '@/Components/Backend/User/General/Navbox';
import './AddFunds.scss';
import { FaDollarSign } from 'react-icons/fa';
import { MdComment } from 'react-icons/md';
import DropdownSelect from '@/Components/General/DropdownSelect';
import CheckHistory from '@/Components/Backend/User/AddFunds/CheckHistory';

export default function AddFunds({ auth }: PageProps) {
    const { t } = useTranslation();
    var balance = 5;

    function setInstruction(event: any) {
        var instructionElement = document.getElementById('instructions');
        if (instructionElement) {
            instructionElement.innerHTML = event.currentTarget.dataset.instruction;
        }
    }

    return (
        <UserLayout
            className='addfunds'
            user={auth.user}>
            <Head title={t('panel.header.add_funds.head')} />
            <Navbox callback={() => { }}>
                <Navbox.Navs>
                    <Navbox.Nav index={0} label=''>
                        <span className='nav-header'>{t('panel.deposit.add_funds')}</span>
                    </Navbox.Nav>
                    <Navbox.Nav index={1} label=''>
                        <span className='nav-header'>{t('panel.deposit.check_history')}</span>
                    </Navbox.Nav>
                </Navbox.Navs>
                <Navbox.Contents>
                    <Navbox.Content index={0}>
                        <div className='deposit-icons'>
                            <div className='holder'>
                                <span className='icon'></span>
                                <div className='text'>{t('panel.deposit.trio.0.desc') + ' ' + balance}</div>
                            </div>
                            <div className='holder'>
                                <span className='icon'></span>
                                <div className='text'>{t('panel.deposit.trio.1.desc')}</div>
                            </div>
                            <div className='holder'>
                                <span className='icon'></span>
                                <div className='text'>{t('panel.deposit.trio.2.desc')}</div>
                            </div>
                        </div>
                        <div className='info deposit-text'>
                            <Trans>
                                {t('panel.deposit.description')}
                            </Trans>
                        </div>
                        <Boxes>
                            <Box>
                                <BoxHeader>
                                    <FaDollarSign></FaDollarSign>
                                    {t('panel.deposit.add_funds_on')}
                                </BoxHeader>
                                <div className='select-header'></div>
                                <DropdownSelect callback={() => { }}>
                                    <DropdownSelect.HeaderHolder>
                                        <DropdownSelect.Header> {t('panel.deposit.payment_methods.0.methods.0.head')}</DropdownSelect.Header>
                                    </DropdownSelect.HeaderHolder>
                                    <DropdownSelect.Items>
                                        <DropdownSelect.Item
                                            index={0}
                                            value={0}
                                            disabled>
                                            {t('panel.deposit.payment_methods.0.header')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.0.methods.0.instruction')}
                                            index={1}
                                            value={1}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.0.methods.0.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.0.methods.1.instruction')}
                                            index={2}
                                            value={2}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.0.methods.1.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.0.methods.2.instruction')}
                                            index={3}
                                            value={3}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.0.methods.2.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.0.methods.3.instruction')}
                                            index={4}
                                            value={4}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.0.methods.3.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            index={5}
                                            value={5}
                                            disabled>
                                            {t('panel.deposit.payment_methods.1.header')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.1.methods.0.instruction')}
                                            index={6}
                                            value={6}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.1.methods.0.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.1.methods.1.instruction')}
                                            index={7}
                                            value={7}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.1.methods.1.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.1.methods.2.instruction')}
                                            index={8}
                                            value={8}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.1.methods.2.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.1.methods.3.instruction')}
                                            index={9}
                                            value={9}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.1.methods.3.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.1.methods.4.instruction')}
                                            index={10}
                                            value={10}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.1.methods.4.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            index={11}
                                            value={11}
                                            disabled>
                                            {t('panel.deposit.payment_methods.2.header')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.2.methods.0.instruction')}
                                            index={12}
                                            value={12}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.2.methods.0.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.2.methods.1.instruction')}
                                            index={13}
                                            value={13}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.2.methods.1.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            index={14}
                                            value={14}
                                            disabled>
                                            {t('panel.deposit.payment_methods.3.header')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.3.methods.0.instruction')}
                                            index={15}
                                            value={15}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.3.methods.0.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.3.methods.1.instruction')}
                                            index={16}
                                            value={16}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.3.methods.1.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            index={17}
                                            value={17}
                                            disabled>
                                            {t('panel.deposit.payment_methods.4.header')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.4.methods.0.instruction')}
                                            index={18}
                                            value={18}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.4.methods.0.head')}
                                        </DropdownSelect.Item>
                                        <DropdownSelect.Item
                                            data-instruction={t('panel.deposit.payment_methods.4.methods.1.instruction')}
                                            index={19}
                                            value={19}
                                            onClick={(e) => { setInstruction(e) }}>
                                            {t('panel.deposit.payment_methods.4.methods.1.head')}
                                        </DropdownSelect.Item>
                                    </DropdownSelect.Items>
                                </DropdownSelect>
                                <div className='instructions' id='instructions'></div>
                            </Box>
                            <Box>
                                <BoxHeader>
                                    <MdComment></MdComment>
                                    {t('panel.deposit.payment_gateways')}
                                </BoxHeader>

                            </Box>
                        </Boxes>
                    </Navbox.Content>
                    <Navbox.Content index={1}>
                        <CheckHistory></CheckHistory>
                    </Navbox.Content>
                </Navbox.Contents>
            </Navbox> 
        </UserLayout> 
    );
}  