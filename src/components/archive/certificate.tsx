import { ColumnDef } from "@tanstack/react-table"
import { Certificate } from "@/types/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/ui/button";
import { LuArrowUpDown, LuArrowUpRight } from "react-icons/lu";

const CertificateCol: ColumnDef<Certificate>[] = [
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <div className="flex gap-2 items-center">
                    <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Date'}</h1>
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-muted hover:text-foreground active:scale-95"
                    >
                        <LuArrowUpDown className="size-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ getValue }) => {
            const date = getValue() as any;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{date.month}{' '}{date.year}</h1>
            );
        },
    },
    {
        accessorKey: "title",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Certificate'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const title = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{title}</h1>
            );
        },
    },
    {
        accessorKey: "provider",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Provider'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const provider = getValue() as string;
            return (
                <Link
                    href={provider}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='opacity-70 flex gap-1 items-center hover:opacity-100 transition-all group w-fit'
                >
                    <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all'>{provider}</h1>
                    <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
            );
        },
    },
    {
        accessorKey: "platform",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Platform'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const platform = getValue() as string;
            return (
                <Link
                    href={platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='opacity-70 flex gap-1 items-center hover:opacity-100 transition-all group w-fit'
                >
                    <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all'>{platform}</h1>
                    <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
            );
        },
    },
    {
        accessorKey: "skills",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Skills'}</h1>
            )
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
        accessorKey: "link",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Certificate Link'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const link = getValue() as string;
            return (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='opacity-70 flex gap-1 items-center hover:opacity-100 transition-all group w-fit'
                >
                    <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all'>{link}</h1>
                    <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
            );
        },
    },
]

export default CertificateCol