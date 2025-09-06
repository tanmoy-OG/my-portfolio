import { ColumnDef } from "@tanstack/react-table"
import { Proj } from "@/types/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

const Job: ColumnDef<Proj>[] = [
    {
        accessorKey: "date.from.year",
        header: ({ column }) => {
            return (
                <div className="flex gap-2 items-center">Year
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
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "company",
        header: "Made At",
    },
    {
        accessorKey: "tech",
        header: "Tech Stack",
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
        header: "Link",
        cell: ({ getValue }) => {
            const link = getValue() as string;
            return link && (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    {link}
                </Link>
            )
        },
    }
]

export default Job