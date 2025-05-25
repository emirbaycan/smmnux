import { Service } from "@/types";
import {
    SortingState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'

import './ServicesTable.scss'
import React, { Dispatch, SetStateAction, createContext, useMemo, useState } from "react";
import { t } from "i18next";
import Popup from "../../General/Popup";
import PrimaryButton from "@/Components/PrimaryButton";
import { Box, Boxes, BoxesCol } from "../General/Box";
import { Trans } from "react-i18next";

const columnHelper = createColumnHelper<Service>()

const columns = [
    columnHelper.accessor(row => row.id, {
        header: t('panel.services.table_heads.0.head'),
    }),
    columnHelper.accessor(row => row.name, {
        header: t('panel.services.table_heads.1.head'),
    }),
    columnHelper.accessor(row => row.rate, {
        header: t('panel.services.table_heads.2.head'),
    }),
    columnHelper.accessor(row => (row.min + ' / ' + row.max), {
        header: t('panel.services.table_heads.3.head'),
    }),
    columnHelper.accessor(row => row.refill, {
        header: t('panel.services.table_heads.4.head'),
    }),
    columnHelper.accessor(row => [row.name, row.desc], {
        header: t('panel.services.table_heads.6.head'),
        cell: (info) => {
            const [open, setOpen] = useState(false);
            return (
                <div className="actions">
                    <PrimaryButton onClick={() => { setOpen(true) }}>{t('panel.services.description')}</PrimaryButton>
                    <Popup open={open} setOpen={setOpen} >
                        <Popup.Header>{info.getValue()[0]}</Popup.Header>
                        <Popup.Content><Trans>{info.getValue()[1]}</Trans></Popup.Content>
                        <Popup.Actions>
                            <Popup.Action>{t('panel.services.buy')}</Popup.Action>
                            <Popup.Close>{t('panel.services.close')}</Popup.Close>
                        </Popup.Actions>
                    </Popup>
                </div>)
        }
    }),
]

function ServiceTable({ category = '', defaultData }: { category: string, defaultData: Service[] }) {
    const [data, setData] = React.useState(defaultData)

    if(data != defaultData){
        setData(defaultData);
    }
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <Box>
            <div className="table-holder">
                <div className="table-header">
                    {category}
                </div>
                <div className="table-inner">
                    <table>
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => {
                                        return (
                                            <th key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : (
                                                    <div>
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                    </div>
                                                )}
                                            </th>
                                        )
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getAllCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Box>
    );
}

export default function ServicesTables({ search, general_category, data }: { data: Array<Service>, general_category: string, search: string }) {

    var grouped_data: any = {}
    var query = search.split(' ');

    query.push(general_category.toLowerCase());

    data.forEach(row => {
        var cat;
        cat = row['category'];
        for (var string in query) {
            string = query[string];
            if (cat.toLowerCase().indexOf(string) == -1) {
                return;
            }
        }
        if (!grouped_data[cat]) {
            grouped_data[cat] = [];
        }
        grouped_data[cat].push(row)
    });

    return (
        <div className='services-tables'>
            <BoxesCol>
                {
                    Object.keys(grouped_data).map((key, index) => {

                        return (
                            <ServiceTable
                                key={index}
                                category={key}
                                defaultData={grouped_data[key]}
                            ></ServiceTable>
                        )
                    })
                }
            </BoxesCol>
        </div>
    );
}
