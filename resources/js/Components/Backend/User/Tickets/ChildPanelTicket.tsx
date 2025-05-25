import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import TextareawLabel from "../../General/TextareaLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export function ChildPanelTicket({ }: {}) {
    const { t } = useTranslation();

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        message: ''
    });

    return (
        <form>
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