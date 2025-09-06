import { ColumnDef } from "@tanstack/react-table"
import { Proj } from "@/types/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/ui/button";
import { LuArrowUpDown, LuArrowUpRight } from "react-icons/lu";

const Project: ColumnDef<Proj>[] = [
    {
        accessorKey: "date.from.year",
        header: ({ column }) => {
            return (
                <div className="flex gap-2 items-center">
                    <h1 className='font-sans-desc font-extrabold'>{'Year'}</h1>
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
            const year = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{year}</h1>
            );
        },
    },
    {
        accessorKey: "title",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Title'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const title = getValue() as string;
            return (
                <Link
                    href={'/archive/projects/' + title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-sans-desc font-extrabold hover:text-accent transition-all'
                >
                    {title}
                </Link>
            );
        },
    },
    {
        accessorKey: "company",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Made At'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const company = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{company}</h1>
            );
        },
    },
    {
        accessorKey: "tech",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Tech Stack'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const tech = getValue() as string[];
            return (
                <div className='flex gap-2'>
                    {tech.map((data, id) => (
                        <Badge key={id}>{data}</Badge>
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: "externalLink",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Link'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const link = getValue() as string;
            return link && (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='opacity-70 flex gap-1 items-center hover:opacity-100 transition-all group w-fit'
                >
                    <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all'>{link}</h1>
                    <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
            )
        },
    }
]

export default Project