import { useForm } from "@inertiajs/react";
import InputwLabel from "../../General/InputwLabel";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import Navbox from "../General/Navbox";
import { Tselect } from "@/types/backend";
import TextareawLabel from "../../General/TextareaLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export function OrderTicket({ }: {}) {
    const { t } = useTranslation();
    const subjects: Array<Tselect> = t('panel.get_support.tickets.new_ticket.subjects', { returnObjects: true });

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        sub_subject: 5,
        order_id: '',
        message: ''
    });

    return (
        <form>
            <div className='sub-subject'>
                <Navbox callback={(e: any) => setData('sub_subject', e)}>
                    <Navbox.Navs>
                        {subjects.map((item: Tselect, index: number) => (
                            <Navbox.Nav key={index} index={index+1} label={item.label} ></Navbox.Nav>
                        ))}
                    </Navbox.Navs>
                </Navbox>
            </div>
            <InputwLabel
                id='order_order_id'
                name='order_id'
                title={t('panel.get_support.tickets.new_ticket.order_id')}
                placeholder={t('panel.get_support.tickets.new_ticket.order_id_ph')}
                value={data.order_id}
                onChange={(e) => setData('order_id', e.target.value)}
            ></InputwLabel>
            <TextareawLabel
                id='order_message'
                name='message'
                title={t('panel.get_support.tickets.new_ticket.message')}
                placeholder={t('panel.get_support.tickets.new_ticket.message_ph')}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
            ></TextareawLabel>
            <PrimaryButton>{t('panel.get_support.tickets.btn')}</PrimaryButton>
        </form>
    )
}