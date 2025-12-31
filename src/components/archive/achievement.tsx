









import { ColumnDef } from "@tanstack/react-table"
import { Achievement } from "@/types/api";
import Link from "next/link";
import { Button } from "@/ui/button";
import { LuArrowUpDown, LuArrowUpRight } from "react-icons/lu";

const AchievementCol: ColumnDef<Achievement>[] = [
    {
        accessorKey: "year",
        meta: {
            responsiveClass: "", // Always visible
        },
        header: ({ column }) => {
            return (
                <div className="flex gap-2 items-center">
                    <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Year'}</h1>
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
        meta: {
            responsiveClass: "", // Always visible
        },
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Highlights'}</h1>
            )
        },
        cell: ({ row, getValue }) => {
            const description = getValue() as string;
            const certificate = (row.original as Achievement).certificate as string | undefined;

            return (
                <>
                    {/* Desktop (>= 1024px): show plain text */}
                    <h1 className='hidden lg:block font-sans-desc font-medium opacity-70'>
                        {description}
                    </h1>

                    {/* Mobile / tablet (< 1024px): show text as a link to certificate */}
                    {certificate ? (
                        <Link
                            href={certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:hidden flex gap-1 items-center transition-all group w-fit"
                        >
                            <h1 className='font-sans-desc font-medium opacity-70 group-hover:text-accent group-hover:opacity-100 transition-all'>{description}</h1>

                            <LuArrowUpRight className='size-4 mt-0.5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent group-hover:opacity-100 transition-all' />
                        </Link>
                    ) : (
                        <h1 className='font-sans-desc font-medium opacity-70 lg:hidden'>
                            {description}
                        </h1>
                    )}
                </>
            );
        },
    },
    {
        accessorKey: "event",
        meta: {
            responsiveClass: "hidden md:table-cell", // Hidden on < 768px, visible on >= 768px
        },
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Event'}</h1>
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
        meta: {
            responsiveClass: "hidden md:table-cell", // Hidden on < 768px, visible on >= 768px
        },
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Organizer'}</h1>
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
        meta: {
            responsiveClass: "hidden lg:table-cell max-w-80", // Hidden on < 1024px, visible on >= 1024px
        },
        header: () => {
            return (
                <h1 className='font-sans-desc font-extrabold whitespace-nowrap'>{'Certificate Link'}</h1>
            )
        },
        cell: ({ getValue }) => {
            const link = getValue() as string;
            return link && (
                link && <Link
                    href={"https://" + link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='opacity-70 inline hover:opacity-100 transition-all group'
                >
                    <h1 className='font-sans-desc font-medium group-hover:text-accent transition-all inline break-all'>{link}</h1>
                    <LuArrowUpRight className='size-4 ml-1 inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
            )
        },
    }
]

export default AchievementCol