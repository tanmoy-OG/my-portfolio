import { Job } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';

const ExpJob = ({ date, company, designation, location, work, tech, portal }: Job) => {
  return (
    <Card className='py-8 bg-secondary/50 backdrop-blur-xs shadow-secondary border-foreground/10 hover:border-foreground/20 hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all'>
      <CardContent className='flex w-full flex-row gap-8'>
        <div className='basis-1/4'>
          <h1 className='mt-1.5 font-sans-desc opacity-50'>
            {`${date.from.month} ${date.from.year} - ${date.current ? 'Present' : date.to.month + ' ' + date.to.year}`}
          </h1>
        </div>
        <div className='basis-3/4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-2xl'>{`${designation} - ${company}`}</p>
            <p className='text-sm opacity-50'>
              {`${location.city}, ${location.country}`}
            </p>
          </div>
          <p className='flex flex-col pr-2 gap-4 font-sans-desc opacity-50'>
            {work}
          </p>
          <div className='flex gap-2'>
            {tech.map((data, id) => (
              <Badge
                key={id}
                className='rounded-full bg-cyan-950 text-accent px-3'
              >
                {data}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpJob;
