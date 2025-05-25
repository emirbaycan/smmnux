import { TStatus } from "@/types";
import { MdCheck, MdCheckBox, MdCurrencyExchange, MdOutlineCheckBox, MdPause, MdPieChartOutline, MdPieChartOutlined, MdRefresh } from "react-icons/md";

const Statuses: TStatus[] = [
    {
        id: 1,
        name: 'Pending',
        icon: MdPause
    },
    {
        id: 2,
        name: 'In Progress',
        icon: MdRefresh
    },
    {
        id: 3,
        name: 'Completed',
        icon: MdCheck
    },
    {
        id: 4,
        name: 'Partial',
        icon: MdCheckBox
    },
    {
        id: 5,
        name: 'Processing',
        icon: MdPieChartOutlined
    },
    {
        id: 6,
        name: 'Canceled',
        icon: MdCurrencyExchange
    }
];

export {
    Statuses
}