import Link from 'next/link';

import jobList from '@/data/experience.json';
import projList from '@/data/projects.json';

import ExpJob from './exp-job';
import ExpProject from './exp-project';
import { LuArrowRight } from "react-icons/lu";
import ShimmerText from './shimmer-text';

const Experience = () => {
  return (
    <div className='flex flex-col justify-between gap-16 md:gap-24 lg:gap-32 px-4 md:px-8 lg:px-16 z-20 relative'>
      <div className='relative'>
        <ShimmerText mt={140} ml={80} mlNegative={true} text='Work' />
        <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<h1>'}</h1>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-accent'>{'My Portfolio'}</h1>
        <h1 className='ml-32 md:ml-48 lg:ml-60 -mt-4 md:-mt-5 lg:-mt-6 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
          {'</h1>'}
        </h1>
      </div>
      <div className='flex flex-col gap-6 md:gap-7 lg:gap-8'>
        <h1 className='-ml-6 md:-ml-9 lg:-ml-12 -mt-8 md:-mt-10 lg:-mt-12 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
          {'<section>'}
        </h1>
        {jobList.map((data, id) => (
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
          <h1 className='font-sans-desc font-bold text-sm md:text-base' id='projects'>{'View Career History'}</h1>
          <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
        </Link>
      </div>
      <div className='relative'>
        <ShimmerText mt={130} ml={16} mlNegative={false} text='Projects' />
        <div className='mt-12 md:mt-18 lg:mt-24 flex flex-col gap-6 md:gap-7 lg:gap-8'>
          {projList.map((data, id) => (
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
            <h1 className='font-sans-desc font-bold text-sm md:text-base'>
              {'View Full Project Archive'}
            </h1>
            <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
          </Link>
          <h1 className='-ml-6 md:-ml-9 lg:-ml-12 opacity-20 font-cursive text-sm md:text-base lg:text-lg' id='skills'>
            {'</section>'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
