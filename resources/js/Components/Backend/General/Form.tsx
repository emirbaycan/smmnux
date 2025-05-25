import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import HtmlInput from "./HtmlEditor";
import { TSetting } from "@/types/backend";

export default function Form({ settings, action = '' }: PropsWithChildren & { settings: Array<TSetting> | undefined, action: '' }) {

    const { t } = useTranslation();

    if (!settings) {
        return false;
    }
    var settings_length = settings.length;

    const [values, setValues] = useState({})

    function handleChange(e: any) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    var setting: TSetting;
    var inputs = []

    for (var i = 0; i < settings_length; i++) {
        setting = settings[i]
        inputs.push(
            <li>
                <label>{t(setting.name)}</label>
                {{
                    'text': <input onChange={handleChange} name={setting.name} value={setting.value}></input>,
                    'check': <input type="checkbox" onChange={handleChange} name={setting.name} checked={setting.checked}></input>,
                    'html': <HtmlInput name={setting.name} value={setting.value} onChange={handleChange}></HtmlInput>
                }[setting.type]
                }
            </li>
        );
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        router.post('/' + action, values)
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <ul>
                {inputs}
            </ul>
            <div className="popup-actions">
                <PrimaryButton type="submit">Submit</PrimaryButton>
                <SecondaryButton>Close</SecondaryButton>
            </div>
        </form>
    )
}

function FormStructure({ settings = {} }) {


    return (
        {}
    )

}