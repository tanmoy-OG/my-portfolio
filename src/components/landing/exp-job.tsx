import { Job } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';
import Link from 'next/link';
import { BsDashLg } from 'react-icons/bs';
import { LuArrowUpRight, LuDot } from "react-icons/lu";

const ExpJob = ({ date, company, designation, location, work, tech, portal }: Job) => {
  return (
    <Card className='py-6 md:py-7 lg:py-8 z-20 bg-secondary/50 backdrop-blur-xs shadow-secondary border-foreground/10 hover:border-foreground/20 hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all group'>
      {portal && <Link href={portal} className="absolute inset-0 z-10" />}
      <CardContent className='flex w-full flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
        <div className='basis-1/4 md:basis-1/4'>
          <h1 className='mt-1 text-xs md:text-sm font-sans-desc opacity-70 flex flex-wrap gap-1 items-center'>
            {`${date.from.month} ${date.from.year}`}
            <BsDashLg className='mt-0.5' />
            {`${date.current ? 'Present' : date.to.month + ' ' + date.to.year}`}
          </h1>
        </div>
        <div className='basis-3/4 flex flex-col gap-3 md:gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='w-fit flex flex-wrap items-center'>
              <p className='text-base md:text-lg font-sans-desc font-extrabold flex flex-wrap items-center group-hover:text-accent transition-all peer'>{designation} {' '} <LuDot className='size-4 md:size-5 mt-0.5' /> {' '} </p>
              <p className='text-base md:text-lg font-sans-desc font-extrabold flex flex-wrap gap-1 items-center group-hover:text-accent transition-all peer'> {company} {portal && <LuArrowUpRight className='size-4 md:size-5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />}
              </p>
            </div>
            <p className='text-xs md:text-sm opacity-70 flex gap-1 items-center'>
              {`${location.city}`}
              <BsDashLg className='mt-0.5' />
              {`${location.country}`}
            </p>
          </div>
          <p className='flex flex-col pr-2 gap-3 md:gap-4 text-xs md:text-sm font-sans-desc opacity-70'>
            {work}
          </p>
          <div className='flex flex-wrap gap-2'>
            {tech.map((data, id) => (
              <Badge key={id} className='text-xs'>{data}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpJob;
