"use client"
import AchievementCol from "@/components/archive/achievement";
import { DataTable } from "@/ui/data-table";

import data from "@/data/achievements.json"
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const Page = () => {
    return (
        <div className='container bg-primary h-full min-h-screen mx-auto px-10 py-20 flex flex-col gap-16'>
            <div className="flex flex-col gap-4">
                <Link href='/' className='w-fit group z-10 flex gap-1 items-center text-accent'>
                    <LuArrowLeft className='-ml-1 pt-0.5 group-hover:-translate-x-2 transition-all' />
                    <h1 className='font-bold font-sans-desc'>
                        {'Tanmoy_OG'}
                    </h1>
                </Link>
                <h1 className='text-5xl font-sans'>{'Achievement List'}</h1>
            </div>
            <DataTable columns={AchievementCol} data={data} />
        </div>
    );
}

export default Page;