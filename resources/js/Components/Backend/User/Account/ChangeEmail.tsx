import { useForm } from "@inertiajs/react";
import InputwLabel from "../../General/InputwLabel";
import Popup from "../../General/Popup";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";

export function ChangeEmail({ open, setOpen, current_email = '' }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, current_email: string }) {
    const { t } = useTranslation();

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        new_email: '',
        current_password: ''
    });

    return (
        <Popup open={open} setOpen={setOpen}>
            <Popup.Header>
                {t('panel.account.details.change_email.head')}
            </Popup.Header>
            <Popup.Content>
                <form>
                    <InputwLabel
                        disabled
                        id='current_email'
                        value={current_email}
                        title={t('panel.account.details.change_email.current_email')}
                    ></InputwLabel>
                    <InputwLabel
                        id='new_email'
                        name='new_email'
                        title={t('panel.account.details.change_email.new_email')}
                        value={data.new_email}
                        onChange={(e) => setData('new_email', e.target.value)}
                    ></InputwLabel>
                    <InputwLabel
                        id='current_password'
                        name='current_password'
                        title={t('panel.account.details.change_email.current_password')}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                    ></InputwLabel>
                </form>
            </Popup.Content>
            <Popup.Actions>
                <Popup.Action>{t('panel.account.details.change_email.action')}</Popup.Action>
                <Popup.Close>{t('panel.account.details.change_email.close')}</Popup.Close>
            </Popup.Actions>
        </Popup>
    )
}