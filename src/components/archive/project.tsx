import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { LuArrowUpDown, LuArrowUpRight } from 'react-icons/lu';

import { Badge } from '@/components/ui/badge';
import { Proj } from '@/types/api';
import { Button } from '@/ui/button';

const Project: ColumnDef<Proj>[] = [
  {
    accessorKey: 'date.from.year',
    meta: {
      responsiveClass: '', // Always visible
    },
    header: ({ column }) => {
      return (
        <div className='flex gap-2 items-center'>
          <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
            {'Year'}
          </h1>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='hover:bg-muted hover:text-foreground active:scale-95'
          >
            <LuArrowUpDown className='size-4' />
          </Button>
        </div>
      );
    },
    cell: ({ getValue }) => {
      const year = getValue() as string;
      return <h1 className='font-sans-desc font-medium opacity-70'>{year}</h1>;
    },
  },
  {
    accessorKey: 'title',
    meta: {
      responsiveClass: '', // Always visible
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Title'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const title = getValue() as string;
      return (
        <Link
          href={`/archive/projects/${title}`}
          target='_blank'
          rel='noopener noreferrer'
          className='inline items-center transition-all group w-fit whitespace-nowrap'
        >
          <h1 className='font-sans-desc font-bold text-base group-hover:text-accent transition-all inline'>
            {title}
          </h1>
          <LuArrowUpRight className='size-4 ml-1 inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
        </Link>
      );
    },
  },
  {
    accessorKey: 'company',
    meta: {
      responsiveClass: 'hidden md:table-cell', // Hidden on < 768px, visible on >= 768px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Made At'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const company = getValue() as string;
      return (
        <h1 className='font-sans-desc font-medium opacity-70'>{company}</h1>
      );
    },
  },
  {
    accessorKey: 'tech',
    meta: {
      responsiveClass: 'hidden lg:table-cell', // Hidden on < 1024px, visible on >= 1024px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Tech Stack'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const tech = getValue() as string[];
      return (
        <div className='flex gap-2 flex-wrap'>
          {tech.map((data, id) => (
            <Badge key={id}>{data}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'externalLink',
    meta: {
      responsiveClass: 'hidden md:table-cell max-w-40 lg:max-w-80', // Hidden on < 768px, visible on >= 768px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Link'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const link = getValue() as string;
      return (
        link &&
        link && (
          <Link
            href={`https://${link}`}
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-70 inline hover:opacity-100 transition-all group  whitespace-nowrap'
          >
            <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all inline break-all'>
              {link}
            </h1>
            <LuArrowUpRight className='size-4 ml-1 inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
          </Link>
        )
      );
    },
  },
];

export default Project;
