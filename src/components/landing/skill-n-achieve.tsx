'use client';
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';

import achievements from '@/data/achievements.json';
import skills from '@/data/skills.json';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const SkillNAchieve = () => {
  return (
    <div className='px-16 flex flex-col justify-between gap-8'>
      <div className='relative'>
        <h1 className='absolute font-sans-bg font-extrabold text-[20rem] ml-64 -mt-80 opacity-10'>
          {'SKILLS'}
        </h1>
        <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
        <h1 className='text-5xl text-accent'>{'Skills & Achievements'}</h1>
        <h1 className='ml-108 -mt-6 opacity-20 font-cursive text-lg'>
          {'</h1>'}
        </h1>
      </div>
      <div className='flex justify-between gap-28'>
        <div className='w-1/2 flex flex-col gap-8'>
          <div className="flex flex-col gap-4">
            {achievements.map((data, id) => (
              <p key={id} className='font-sans-desc opacity-70'>
                <span>{data.desc}</span>
                {' - '}
                <span>{data.event}</span>
                {' ('}
                <span>{data.org}</span>
                {')'}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link href='/archive/achievements' className='w-fit group z-10 flex gap-1 items-center hover:text-accent'>
              <h1 className='font-sans-desc font-bold'>
                {'View All Achievements'}
              </h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all' />
            </Link>
            <Link href='/archive/certificates' className='w-fit group z-10 flex gap-1 items-center hover:text-accent'>
              <h1 className='font-sans-desc font-bold'>
                {'View All Certifications'}
              </h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all' />
            </Link>
          </div>
        </div>
        <div className='w-1/2 text-accent -mt-8'>
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 3,
              maxSpeed: 'fast',
            })}
            // onClick={(tag: string) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {skills}
          </TagCloud>
        </div>
      </div>
    </div>
  );
};

export default SkillNAchieve;
