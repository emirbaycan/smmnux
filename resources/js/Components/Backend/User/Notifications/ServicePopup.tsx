import { useForm } from "@inertiajs/react";
import InputwLabel from "../../General/InputwLabel";
import Popup from "../../General/Popup";
import { useTranslation } from "react-i18next";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export function ServicePopup({ open, setOpen, head = '', children }: PropsWithChildren & { head: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    const { t } = useTranslation();

    return (
        <Popup open={open} setOpen={setOpen}>
            <Popup.Header>
                {head}
            </Popup.Header>
            <Popup.Content>
                {children}
            </Popup.Content>
        </Popup>
    )
}