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
    <div className='px-4 md:px-8 lg:px-16 flex flex-col justify-between gap-6 md:gap-7 lg:gap-8'>
      <div className='relative'>
        <ShimmerText mt={140} ml={64} mlNegative={false} text='Skills' />
        <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<h1>'}</h1>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-accent break-words'>{'Skills & Achievements'}</h1>
        <h1 className='ml-48 md:ml-80 lg:ml-108 -mt-4 md:-mt-5 lg:-mt-6 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
          {'</h1>'}
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-28'>
        <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8'>
          <div className="flex flex-col gap-3 md:gap-4">
            {achievements.map((data, id) => (
              <Link key={id} href={data.certificate} className='font-sans-desc opacity-70 group hover:text-accent hover:opacity-100 transition-all hover:cursor-pointer text-sm md:text-base'>
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
        <div className='w-full lg:w-1/2 text-accent -mt-4 md:-mt-6 lg:-mt-8 h-64 md:h-80 lg:h-auto'>
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
