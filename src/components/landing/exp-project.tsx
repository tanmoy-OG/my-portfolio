import Image from 'next/image';

import { Proj } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';
import Link from 'next/link';
import { BsDashLg } from "react-icons/bs";
import { LuArrowUpRight } from 'react-icons/lu';

const ExpProject = ({
  gallery,
  date,
  title,
  team,
  hackathon,
  organization,
  description,
  tech,
  externalLink,
  gitHub,
  install,
}: Proj) => {
  const projHref = `/archive/projects/${title}`
  const titleHref = externalLink ? externalLink : projHref
  return (
    <Card className='py-6 md:py-7 lg:py-8 z-20 bg-secondary/50 backdrop-blur-xs shadow-secondary border-foreground/10 hover:border-foreground/20 hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all group'>
      <Link href={projHref}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10" />
      <CardContent className='flex w-full flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
        <div className='basis-1/4 flex flex-col gap-2'>
          {gallery[0] && (
            <Image
              src={gallery[0]}
              width='100'
              height='100'
              alt=''
              className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all'
            />
          )}
          <h1 className='mt-1 text-xs md:text-sm font-sans-desc opacity-70 flex flex-wrap gap-1 items-center'>
            {`${date.from.month} ${date.from.year}`}
            <BsDashLg className='mt-0.5' />
            {`${date.to.month} ${date.to.year}`}
          </h1>
        </div>
        <div className='basis-3/4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Link
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              className='w-fit relative z-20 flex gap-1 items-center'
            >
              <h1 className='text-base md:text-lg font-sans-desc font-extrabold group-hover:text-accent transition-all peer break-words'>{title}</h1>
              <LuArrowUpRight className='size-4 md:size-5 hover:translate-x-1 peer-hover:translate-x-1 hover:-translate-y-1 peer-hover:-translate-y-1 group-hover:text-accent transition-all flex-shrink-0' />
            </Link>
            <div className='flex flex-col gap-0.5'>
              <p className='text-xs md:text-sm opacity-70 flex flex-wrap gap-1'>
                {team && `Team ${team}`}
                {hackathon && team && <span className='flex gap-1 items-center'><BsDashLg className='mt-0.5' />{`${hackathon}`}</span>}
              </p>
              <p className='text-xs md:text-sm opacity-70 flex flex-wrap gap-1'>
                {organization.orgName}
                {organization.platform && <span className='flex gap-1 items-center'><BsDashLg className='mt-0.5' />{`${organization.platform}`}</span>}
              </p>
            </div>
          </div>
          <p className='flex flex-col pr-2 gap-4 text-xs md:text-sm font-sans-desc opacity-70'>
            {description}
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

export default ExpProject;
