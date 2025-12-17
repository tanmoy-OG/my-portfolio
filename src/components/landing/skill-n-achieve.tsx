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
    <div className='px-4 md:px-6 lg:px-8 flex flex-col justify-between gap-6 md:gap-7 lg:gap-8'>
      <div className='relative md:px-8'>
        <ShimmerText mt={140} ml={64} mlNegative={false} text='Skills' />
        <h1 className='md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-base lg:text-lg'>{'<h1>'}</h1>
        <h1 className='ml-4 md:ml-0 text-4xl md:text-5xl text-accent break-words w-2/3 sm:w-full'>{'Skills & Achievements'}</h1>
        <h1 className='ml-56 md:ml-104 -mt-6 opacity-20 font-cursive text-base lg:text-lg'>
          {'</h1>'}
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-between item gap-8 md:gap-12 lg:gap-28 md:px-8'>
        <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8'>
          <div className="flex flex-col gap-3 md:gap-4">
            {achievements.map((data, id) => (
              <Link key={id} href={data.certificate} className='ml-4 md:ml-0 font-sans-desc opacity-70 group hover:text-accent hover:opacity-100 transition-all hover:cursor-pointer text-sm md:text-lg lg:text-base z-20'>
                <span>{data.description}</span>
                <span className='flex flex-wrap gap-1 items-center'>
                  <BsDashLg className='mt-0.5' />
                  {data.event}
                  {'('}
                  {data.organization}
                  {')'}
                  <LuArrowUpRight className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-all size-4 md:size-5' />
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link href='/archive/achievements' className='w-fit group z-20 flex gap-1 items-center hover:text-accent'>
              <h1 className='font-sans-desc font-bold text-sm md:text-base'>
                {'View All Achievements'}
              </h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
            </Link>
            <Link href='/archive/certificates' className='w-fit group z-20 flex gap-1 items-center hover:text-accent' id='connect'>
              <h1 className='font-sans-desc font-bold text-sm md:text-base'>
                {'View All Certifications'}
              </h1>
              <LuArrowRight className='group-hover:translate-x-2 transition-all size-4 md:size-5' />
            </Link>
          </div>
        </div>
        <div className='scale-150 sm:scale-300 lg:scale-150 text-sm sm:text-xs lg:w-1/2 text-accent pt-12 sm:pt-28 lg:pt-0 mb-8 sm:mb-28 lg:mb-0 sm:-mt-4 md:-mt-6 lg:mt-8 sm:h-64 md:h-80 lg:h-fit flex justify-around'>
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(300, w.innerWidth < 768 ? w.innerWidth * 0.4 : w.innerWidth < 1024 ? w.innerWidth * 0.3 : 500, w.innerHeight) / (w.innerWidth < 768 ? 2 : 3),
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
