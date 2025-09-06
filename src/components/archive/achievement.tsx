import { ColumnDef } from "@tanstack/react-table"
import { Achievement } from "@/types/api";
import Link from "next/link";
import { Button } from "@/ui/button";
import { LuArrowUpDown, LuArrowUpRight } from "react-icons/lu";

const AchievementCol: ColumnDef<Achievement>[] = [
    {
        accessorKey: "year",
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
        accessorKey: "description",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Highlights'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const description = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{description}</h1>
            );
        },
    },
    {
        accessorKey: "event",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Event'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const event = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{event}</h1>
            );
        },
    },
    {
        accessorKey: "organization",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Organizer'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const organization = getValue() as string;
            return (
                <h1 className='font-sans-desc font-medium opacity-70'>{organization}</h1>
            );
        },
    },
    {
        accessorKey: "certificate",
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold'>{'Certificate Link'}</h1>
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

export default AchievementCol