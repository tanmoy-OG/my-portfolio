"use client"
import { Project } from "@/components/archive/columns";
import { DataTable } from "@/ui/data-table";

import data from "@/data/projects.json"
import Link from "next/link";

const Page = () => {
    return (
        <div className='container bg-primary h-full min-h-screen mx-auto px-10 py-20 flex flex-col gap-16'>
            <div className="flex flex-col gap-2">
                <Link href='/archive/certificates' className='w-fit group z-10'>
                    <h1 className='text-xl font-medium'>
                        {'<- Tanmoy_OG'}
                    </h1>
                    <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all'></div>
                </Link>
                <h1 className='text-5xl'>{'All Projects'}</h1>
            </div>
            <DataTable columns={Project} data={data} />
        </div>
    );
}

export default Page;