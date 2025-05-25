import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import TextareawLabel from "../../General/TextareaLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import InputwLabel from "../../General/InputwLabel";

export function RequestTicket({ }: {}) {
    const { t } = useTranslation();

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        service: '',
        feature: '',
        method: '',
        message: ''
    });

    return (
        <form>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.add_service')}
                value={data.service}
                onChange={(e) => setData('service', e.target.value)}
            ></InputwLabel>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.add_feature')}
                value={data.feature}
                onChange={(e) => setData('feature', e.target.value)}
            ></InputwLabel>
            <InputwLabel
                title={t('panel.get_support.tickets.new_ticket.add_method')}
                value={data.method}
                onChange={(e) => setData('method', e.target.value)}
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