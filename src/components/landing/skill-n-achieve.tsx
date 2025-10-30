'use client';
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';

import achievements from '@/data/achievements.json';
import skills from '@/data/skills.json';
import Link from 'next/link';
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu';
import { BsDashLg } from "react-icons/bs";
import ShimmerText from './shimmer-text';

const SkillNAchieve = () => {
  return (
    <div className='px-16 flex flex-col justify-between gap-8'>
      <div className='relative'>
        <ShimmerText mt={140} ml={64} mlNegative={false} text='Skills' />
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
              <Link key={id} href={data.certificate} className='font-sans-desc opacity-70 group hover:text-accent hover:opacity-100 transition-all hover:cursor-pointer'>
                <span>{data.description}</span>
                <span className='flex flex-wrap gap-1 items-center'>
                  <BsDashLg className='mt-0.5' />
                  {data.event}
                  {'('}
                  {data.organization}
                  {')'}
                  <LuArrowUpRight className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link href='/archive/achievements' className='w-fit group z-20 flex gap-1 items-center hover:text-accent'>
              <h1 className='font-sans-desc font-bold'>
                {'View All Achievements'}
              </h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all' />
            </Link>
            <Link href='/archive/certificates' className='w-fit group z-20 flex gap-1 items-center hover:text-accent' id='connect'>
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
