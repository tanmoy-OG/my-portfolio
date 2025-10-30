import { Job } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';
import Link from 'next/link';
import { BsDashLg } from 'react-icons/bs';
import { LuArrowUpRight, LuDot } from "react-icons/lu";

const ExpJob = ({ date, company, designation, location, work, tech, portal }: Job) => {
  return (
    <Card className='py-8 z-20 bg-secondary/50 backdrop-blur-xs shadow-secondary border-foreground/10 hover:border-foreground/20 hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all group'>
      {portal && <Link href={portal} className="absolute inset-0 z-10" />}
      <CardContent className='flex w-full flex-row gap-8'>
        <div className='basis-1/4'>
          <h1 className='mt-1 text-sm font-sans-desc opacity-70 flex gap-1 items-center'>
            {`${date.from.month} ${date.from.year}`}
            <BsDashLg className='mt-0.5' />
            {`${date.current ? 'Present' : date.to.month + ' ' + date.to.year}`}
          </h1>
        </div>
        <div className='basis-3/4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='w-fit flex gap-1 items-center'>
              <p className='text-lg font-sans-desc font-extrabold flex items-center group-hover:text-accent transition-all peer'>{designation} {' '} <LuDot className='size-5 mt-0.5' /> {' '} {company} </p>
              {portal && <LuArrowUpRight className='size-5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />}</div>
            <p className='text-sm opacity-70 flex gap-1 items-center'>
              {`${location.city}`}
              <BsDashLg className='mt-0.5' />
              {`${location.country}`}
            </p>
          </div>
          <p className='flex flex-col pr-2 gap-4 text-sm font-sans-desc opacity-70'>
            {work}
          </p>
          <div className='flex gap-2'>
            {tech.map((data, id) => (
              <Badge key={id}>{data}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpJob;
