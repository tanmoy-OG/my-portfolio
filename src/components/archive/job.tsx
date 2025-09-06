import { ColumnDef } from "@tanstack/react-table"
import { Job } from "@/types/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { BsDashLg } from "react-icons/bs";

const JobCol: ColumnDef<Job>[] = [
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
        accessorKey: "company",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Company / Client'}</h1>
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
        accessorKey: "designation",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Designation'}</h1>
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
        accessorKey: "location",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Location'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const location = getValue() as { city?: string; country?: string } | undefined;
            return (
                <h1 className='font-sans-desc font-medium opacity-70 flex gap-1 items-center'>
                    {location?.city ?? ''}
                    {location?.city && location.country && <BsDashLg className='mt-0.5' />}
                    {location?.country ?? ''}
                </h1>
            )
        },
    }
]

export default JobCol