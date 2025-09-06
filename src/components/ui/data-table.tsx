import * as React from "react"
import {
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { DataTableProps } from "@/types/api"

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        }
    })

    return (
        <div className="overflow-x-auto">
            <Table className="table-auto w-full min-w-full">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => {
                                const minWidthClasses = [
                                    "min-w-[8.33%]", // Year - equivalent to w-1/12
                                    "min-w-[16.67%]", // Title - equivalent to w-2/12
                                    "min-w-[16.67%]", // Made At - equivalent to w-2/12
                                    "min-w-[33.33%]", // Tech Stack - equivalent to w-4/12
                                    "min-w-[16.67%]"  // Link - equivalent to w-2/12
                                ];
                                return (
                                    <TableHead
                                        key={header.id}
                                        className={`${minWidthClasses[index]} w-auto`}
                                        style={{ width: 'auto' }}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell, index) => {
                                    const minWidthClasses = [
                                        "min-w-[8.33%]", // Year - equivalent to w-1/12
                                        "min-w-[16.67%]", // Title - equivalent to w-2/12
                                        "min-w-[16.67%]", // Made At - equivalent to w-2/12
                                        "min-w-[33.33%]", // Tech Stack - equivalent to w-4/12
                                        "min-w-[16.67%]"  // Link - equivalent to w-2/12
                                    ];
                                    return (
                                        <TableCell
                                            key={cell.id}
                                            className={`${minWidthClasses[index]} w-auto`}
                                            style={{ width: 'auto' }}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        ))) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}