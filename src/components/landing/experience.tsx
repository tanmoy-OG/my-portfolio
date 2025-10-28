import Link from 'next/link';

import jobList from '@/data/experience.json';
import projList from '@/data/projects.json';

import ExpJob from './exp-job';
import ExpProject from './exp-project';
import { LuArrowRight } from "react-icons/lu";

const Experience = () => {
  return (
    <div className='flex flex-col justify-between gap-32 px-16 z-20 relative'>
      <div className='relative' id='experience'>
        <h1 className='absolute font-sans-bg font-extrabold text-[20rem] -ml-80 -mt-64 opacity-10'>
          {'WORK'}
        </h1>
        <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
        <h1 className='text-5xl text-accent'>{'My Portfolio'}</h1>
        <h1 className='ml-60 -mt-6 opacity-20 font-cursive text-lg'>
          {'</h1>'}
        </h1>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='-ml-12 -mt-12 opacity-20 font-cursive text-lg'>
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
        <Link href='/archive/jobs' className='w-fit group z-10 flex gap-1 items-center hover:text-accent'>
          <h1 className='font-sans-desc font-bold'>{'View Career History'}</h1>
          <LuArrowRight className='group-hover:translate-x-2 transition-all' />
        </Link>
      </div>
      <div className='relative' id='projects'>
        <div className='absolute font-sans-bg font-extrabold text-[20rem] ml-16 -mt-52 opacity-10'>
          {'PROJECTS'}
        </div>
        <div className='mt-24 flex flex-col gap-8'>
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
          <Link href='/archive/projects' className='w-fit group z-10 flex gap-1 items-center hover:text-accent'>
            <h1 className='font-sans-desc font-bold'>
              {'View Full Project Archive'}
            </h1>
            <LuArrowRight className='group-hover:translate-x-2 transition-all' />
          </Link>
          <h1 className='-ml-12 opacity-20 font-cursive text-lg' id='skills'>
            {'</section>'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
