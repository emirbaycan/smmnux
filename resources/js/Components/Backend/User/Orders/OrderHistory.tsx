import { FaChartLine } from "react-icons/fa";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { Dispatch, InputHTMLAttributes, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { MdCheck, MdHistory, MdPause, MdRefresh, MdViewList } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Order } from "@/types";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import './OrderHistory.scss'
import React from "react";
import { t } from "i18next";
import { Statuses } from "@/constants/backend";


const defaultData: Order[] = [
    {
        id: 1,
        service: 2,
        link: 'https://test.com',
        status: 2,
        charge: 5.5,
        quantity: 5,
        details: '50',
    },
    {
        id: 2,
        service: 3,
        link: 'https://test.com',
        status: 1,
        charge: 5.5,
        quantity: 5,
        details: '50',
    },
    {
        id: 3,
        service: 2,
        link: 'https://test.com',
        status: 1,
        charge: 5.5,
        quantity: 5,
        details: '50',
    }
]

const columnHelper = createColumnHelper<Order>()

const columns = [
    columnHelper.accessor(row => row.id, {
        header: t('panel.order_history.table_heads.0.head'),
    }),
    columnHelper.accessor(row => row.service, {
        header: t('panel.order_history.table_heads.1.head'),
    }),
    columnHelper.accessor(row => row.link, {
        header: t('panel.order_history.table_heads.2.head'),
    }),
    columnHelper.accessor(row => row.status, {
        cell: info => Statuses[info.getValue()].name,
        header: t('panel.order_history.table_heads.3.head'),
    }),
    columnHelper.accessor(row => row.charge, {
        header: t('panel.order_history.table_heads.4.head'),
    }),
    columnHelper.accessor(row => row.quantity, {
        header: t('panel.order_history.table_heads.5.head'),
    }),
]

export default function OrderHistory() {
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className='order-history'>
            <div className="header">
                <MdHistory></MdHistory>
                <span>{t('panel.order_history.table_header')}</span>
            </div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    );
}
