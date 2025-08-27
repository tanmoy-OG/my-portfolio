import Link from 'next/link';

import jobList from '@/data/experience.json';
import projList from '@/data/projects.json';

import ExpJob from './exp-job';
import ExpProject from './exp-project';


const Experience = () => {
  return (
    <div className='flex flex-col justify-between gap-32 px-16 z-20 relative'>
      <div className='relative'>
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
          />
        ))}
        <Link href='path' className='w-fit group z-10'>
          <h1 className='text-xl font-medium'>{'View Career History ->'}</h1>
          <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all'></div>
        </Link>
      </div>
      <div className='relative'>
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
              org={data.organization}
              desc={data.description}
              tech={data.tech}
              externalLink={data.externalLink}
              gitHub={data.gitHub}
              installs={data.install}
            />
          ))}
          <Link href='path' className='w-fit group z-10'>
            <h1 className='text-xl font-medium'>
              {'View Full Project Archive ->'}
            </h1>
            <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all'></div>
          </Link>
          <h1 className='-ml-12 opacity-20 font-cursive text-lg'>
            {'</section>'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
