import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { LuArrowUpDown, LuArrowUpRight } from 'react-icons/lu';

import { Badge } from '@/components/ui/badge';
import { Certificate } from '@/types/api';
import { Button } from '@/ui/button';

const CertificateCol: ColumnDef<Certificate>[] = [
  {
    accessorKey: 'date',
    meta: {
      responsiveClass: '', // Always visible
    },
    header: ({ column }) => {
      return (
        <div className='flex gap-2 items-center'>
          <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
            {'Date'}
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
      const date = getValue() as any;
      return (
        <h1 className='font-sans-desc font-medium opacity-70'>
          {date.month} {date.year}
        </h1>
      );
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
          {'Certificate'}
        </h1>
      );
    },
    cell: ({ row, getValue }) => {
      const title = getValue() as string;
      const link = (row.original as Certificate).link as string | undefined;

      return (
        <>
          {/* Desktop (>= 1024px): show plain text */}
          <h1 className='hidden lg:block font-sans-desc font-medium opacity-70'>
            {title}
          </h1>

          {/* Mobile / tablet (< 1024px): show text as a link to certificate */}
          {link ? (
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='lg:hidden flex gap-1 items-center transition-all group w-fit'
            >
              <h1 className='font-sans-desc font-medium opacity-70 group-hover:text-accent group-hover:opacity-100 transition-all'>
                {title}
              </h1>

              <LuArrowUpRight className='size-4 mt-0.5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent group-hover:opacity-100 transition-all' />
            </Link>
          ) : (
            <h1 className='font-sans-desc font-medium opacity-70 lg:hidden'>
              {title}
            </h1>
          )}
        </>
      );
    },
  },
  {
    accessorKey: 'provider',
    meta: {
      responsiveClass: 'hidden md:table-cell', // Hidden on < 768px, visible on >= 768px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Provider'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const provider = getValue() as string;
      return (
        provider && (
          <Link
            href={`https://${provider}`}
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-70 inline hover:opacity-100 transition-all group'
          >
            <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all inline'>
              {provider}
            </h1>
            <LuArrowUpRight className='size-4 ml-1 inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
          </Link>
        )
      );
    },
  },
  {
    accessorKey: 'platform',
    meta: {
      responsiveClass: 'hidden lg:table-cell', // Hidden on < 1024px, visible on >= 1024px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Platform'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const platform = getValue() as string;
      return (
        platform && (
          <Link
            href={`https://${platform}`}
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-70 inline hover:opacity-100 transition-all group'
          >
            <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all inline break-all'>
              {platform}
            </h1>
            <LuArrowUpRight className='size-4 ml-1 inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
          </Link>
        )
      );
    },
  },
  {
    accessorKey: 'skills',
    meta: {
      responsiveClass: 'hidden md:table-cell', // Hidden on < 768px, visible on >= 768px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Skills'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const skills = getValue() as string[];
      return (
        <div className='flex gap-2 flex-wrap'>
          {skills.map((data, id) => (
            <Badge key={id}>{data}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'link',
    meta: {
      responsiveClass: 'hidden lg:table-cell max-w-80', // Hidden on < 1024px, visible on >= 1024px
    },
    header: () => {
      return (
        <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>
          {'Certificate Link'}
        </h1>
      );
    },
    cell: ({ getValue }) => {
      const link = getValue() as string;
      return (
        link && (
          <Link
            href={`https://${link}`}
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-70 inline hover:opacity-100 transition-all group'
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

export default CertificateCol;
