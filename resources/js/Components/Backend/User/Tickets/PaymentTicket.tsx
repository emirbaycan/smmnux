import { useForm } from "@inertiajs/react";
import InputwLabel from "../../General/InputwLabel";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import Navbox from "../General/Navbox";
import { Tselect } from "@/types/backend";
import TextareawLabel from "../../General/TextareaLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import DropdownSelect from "@/Components/General/DropdownSelect";

export function PaymentTİcket({ }: {}) {
    const { t } = useTranslation();
    const items: Array<Tselect> = t('panel.get_support.tickets.new_ticket.payments', { returnObjects: true });

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        sub_subject: 5,
        payment_id: '',
        message: ''
    });

    return (
        <form>
            <div className='sub-subject'>
                <div className="label">{t('panel.get_support.tickets.new_ticket.payment')}</div>
                <DropdownSelect callback={(e: any) => setData('sub_subject', e)}>
                    <DropdownSelect.HeaderHolder>
                        <DropdownSelect.Header>{t('panel.get_support.tickets.new_ticket.payment')}</DropdownSelect.Header>
                    </DropdownSelect.HeaderHolder>
                    <DropdownSelect.Items>
                        {items.map((item: Tselect, index: number) => (
                            <DropdownSelect.Item
                                index={index}
                                value={item.value}
                            >
                                {item.label}
                            </DropdownSelect.Item>
                        ))}
                    </DropdownSelect.Items>
                </DropdownSelect>
            </div>
            <InputwLabel
                id='payment_payment_id'
                name='payment_id'
                title={t('panel.get_support.tickets.new_ticket.payment_id')}
                placeholder={t('panel.get_support.tickets.new_ticket.payment_id_ph')}
            ></InputwLabel>
            <TextareawLabel
                id='payment_message'
                name='message'
                title={t('panel.get_support.tickets.new_ticket.message')}
                placeholder={t('panel.get_support.tickets.new_ticket.message_ph')}
            ></TextareawLabel>
            <PrimaryButton>{t('panel.get_support.tickets.btn')}</PrimaryButton>
        </form>
    )
}