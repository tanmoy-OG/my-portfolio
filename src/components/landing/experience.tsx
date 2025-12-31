import Link from 'next/link';

import jobList from '@/data/experience.json';
import projList from '@/data/projects.json';

import ExpJob from './exp-job';
import ExpProject from './exp-project';
import { LuArrowRight } from "react-icons/lu";
import ShimmerText from './shimmer-text';

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col justify-between gap-16 md:gap-24 lg:gap-32 px-4 md:px-6 lg:px-8 z-20 relative'>
      <div className="flex flex-col gap-8 md:gap-20 md:px-8">
        <div className='text-base lg:text-lg relative'>
          <ShimmerText mt={140} ml={80} mlNegative={true} text='Work' />
          <h1 className='md:-ml-6 lg:-ml-8 opacity-15 font-cursive'>{'<h1>'}</h1>
          <h1 className='ml-4 md:ml-0 text-4xl md:text-5xl text-accent'>{'My Portfolio'}</h1>
          <h1 className='ml-48 md:ml-60 -mt-6 opacity-15 font-cursive'>
            {'</h1>'}
          </h1>
        </div>
        <div className='flex flex-col gap-4 lg:gap-8'>
          <h1 className='-ml-4 md:-ml-10 lg:-ml-12 opacity-15 font-cursive text-base lg:text-lg'>
            {'<section>'}
          </h1>
          <div className="flex flex-col gap-8">
            {jobList.slice(0, 4).map((data, id) => (
              <ExpJob
                key={id}
                date={data.date}
                company={data.company}
                designation={data.designation}
                location={data.location}
                work={data.work}
                tech={data.tech}
                portal={data.portal}
              />
            ))}
            <Link href='/archive/jobs' className='w-fit group z-20 flex gap-1 items-center hover:text-accent'>
              <h1 className='font-sans-desc font-bold text-sm md:text-lg lg:text-base'>{'View Career History'}</h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
            </Link>
          </div>
        </div>
      </div>
      <div id='projects' className='relative md:px-8'>
        <ShimmerText mt={130} ml={16} mlNegative={false} text='Projects' />
        <div className='mt-12 md:mt-18 lg:mt-24 flex flex-col gap-8'>
          {projList.slice(0, 4).map((data, id) => (
            <ExpProject
              key={id}
              gallery={data.gallery}
              date={data.date}
              title={data.title}
              team={data.team}
              hackathon={data.hackathon}
              organization={data.organization}
              company={data.company}
              description={data.description}
              tech={data.tech}
              externalLink={data.externalLink}
              gitHub={data.gitHub}
              install={data.install}
            />
          ))}
          <Link href='/archive/projects' className='w-fit group z-20 flex gap-1 items-center hover:text-accent'>
            <h1 className='font-sans-desc font-bold text-sm md:text-lg lg:text-base'>
              {'View Full Project Archive'}
            </h1>
            <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
          </Link>
          <h1 className='-ml-4 md:-ml-10 lg:-ml-12 -mt-4 lg:mt-0 opacity-15 font-cursive text-sm md:text-base lg:text-lg'>
            {'</section>'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
