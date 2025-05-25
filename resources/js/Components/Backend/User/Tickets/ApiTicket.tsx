import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import TextareawLabel from "../../General/TextareaLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import InputwLabel from "../../General/InputwLabel";

export function ApiTicket({ }: {}) {
    const { t } = useTranslation();

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        website_url: '',
        contact:'',
        monthly_sell:0,
        service_id:0,
        message:''
    });

    return (
        <form>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.website_url')} 
                value={data.website_url}
                onChange={(e) => setData('website_url', e.target.value)}
            ></InputwLabel>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.whatsapp')} 
                value={data.contact}
                onChange={(e) => setData('contact', e.target.value)}
            ></InputwLabel>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.monthly')} 
                value={data.monthly_sell}
                onChange={(e) => setData('monthly_sell', e.target.valueAsNumber)}
            ></InputwLabel>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.service_id')} 
                value={data.service_id}
                onChange={(e) => setData('service_id', e.target.valueAsNumber)}
            ></InputwLabel>
            <TextareawLabel
                title={t('panel.get_support.tickets.new_ticket.message')}
                placeholder={t('panel.get_support.tickets.new_ticket.message_ph')}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
            ></TextareawLabel>
            <PrimaryButton>{t('panel.get_support.tickets.btn')}</PrimaryButton>
        </form>
    )
}