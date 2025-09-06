import Image from 'next/image';

import { Proj } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';

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
  return (
    <Card className='py-8 bg-secondary/50 backdrop-blur-xs shadow-secondary border-foreground/10 hover:border-foreground/20 hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all group'>
      <CardContent className='flex w-full flex-row gap-8'>
        <div className='basis-1/4 flex flex-col gap-2'>
          {gallery[0] && (
            <Image
              src={gallery[0]}
              width='150'
              height='150'
              alt=''
              className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all'
            />
          )}
          <h1 className='mt-1.5 font-sans-desc opacity-50'>
            {`${date.from.month} ${date.from.year} - ${date.to.month} ${date.to.year}`}
          </h1>
        </div>
        <div className='basis-3/4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-2xl'>{title}</p>
            <div className='flex flex-col gap-0.5'>
              <p className='text-sm opacity-50'>
                {team && `Team ${team}`}
                {hackathon && team && ` - ${hackathon}`}
              </p>
              <p className='text-sm opacity-50'>
                {organization.orgName + (organization.platform && ` - ${organization.platform}`)}
              </p>
            </div>
          </div>
          <p className='flex flex-col pr-2 gap-4 font-sans-desc opacity-50'>
            {description}
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

export default ExpProject;
