import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTableProps } from '@/types/api';

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className='overflow-x-auto'>
      <Table className='table-auto w-full min-w-full'>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                const minWidthClasses = [
                  'min-w-[8.33%]', // Year - equivalent to w-1/12
                  'min-w-[16.67%]', // Title - equivalent to w-2/12
                  'min-w-[16.67%]', // Made At - equivalent to w-2/12
                  'min-w-[33.33%]', // Tech Stack - equivalent to w-4/12
                  'min-w-[16.67%]', // Link - equivalent to w-2/12
                ];
                const responsiveClass =
                  (header.column.columnDef.meta as { responsiveClass?: string })
                    ?.responsiveClass ?? '';
                return (
                  <TableHead
                    key={header.id}
                    className={`${minWidthClasses[index]} w-auto ${responsiveClass}`}
                    style={{ width: 'auto' }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell, index) => {
                  const minWidthClasses = [
                    'min-w-[8.33%]', // Year - equivalent to w-1/12
                    'min-w-[16.67%]', // Title - equivalent to w-2/12
                    'min-w-[16.67%]', // Made At - equivalent to w-2/12
                    'min-w-[33.33%]', // Tech Stack - equivalent to w-4/12
                    'min-w-[16.67%]', // Link - equivalent to w-2/12
                  ];
                  const responsiveClass =
                    (cell.column.columnDef.meta as { responsiveClass?: string })
                      ?.responsiveClass ?? '';
                  return (
                    <TableCell
                      key={cell.id}
                      className={`${minWidthClasses[index]} w-auto content-start ${responsiveClass}`}
                      style={{ width: 'auto' }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
