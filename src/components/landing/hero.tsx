import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

import Stats from './hero-stats';
import { getGithubContributions } from '@/lib/github';
import projects from '@/assets/data/projects.json';
import skills from '@/assets/data/skills.json';
import Link from 'next/link';

const Hero = async () => {
  const githubCommits = await getGithubContributions('tanmoy-OG');
  return (
    <div className='h-screen place-content-center flex flex-col gap-4 text-2xl md:h-[98vh] lg:block lg:h-auto lg:place-content-normal'>
      <h1 className='opacity-20 font-cursive text-base md:text-lg'>{'<html>'}</h1>
      <div className='flex flex-col mx-2 gap-4 md:block md:mx-4 lg:block'>
        <h1 className='opacity-20 font-cursive text-base md:text-lg'>{'<body>'}</h1>
        <div className='mx-2 mt-2 flex flex-col gap-8 md:mx-4 md:mt-4 lg:block'>
          <div className="">
            <h1 className='opacity-20 font-cursive text-base md:text-lg'>{'<h1>'}</h1>
            <div className='mx-4 flex flex-col gap-8 md:mx-6 lg:mx-8 lg:block'>
              <div className="text-6xl md:text-7xl lg:text-5xl">
                <h1 className=''>{'Hi,'}</h1>
                <h1 className=''>
                  {"I'm "}
                  <span className='text-accent'>{'Tanmoy'}</span>
                </h1>
              </div>
              <div className='text-5xl md:text-6xl lg:text-5xl'>
                <h1 className='break-words'>{'Web Developer '}
                  <span className='block lg:inline'>{'& Designer'}</span>
                </h1>
              </div>
            </div>
            <h1 className='ml-64 -mt-4 opacity-20 font-cursive text-base md:ml-72 md:-mt-6 md:text-lg lg:ml-132'>
              {'</h1>'}
            </h1>
          </div>
          <div className="">
            <h1 className='mt-2 opacity-20 font-cursive text-base md:mt-4 md:text-lg'>{'<div>'}</h1>
            <div className='flex gap-6 mx-4 mt-2 md:mx-6 lg:gap-8 lg:mx-8'>
              <Link href="https://linkedin.com/in/tanmoy-choudhury/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent active:text-accent active:scale-90 transition-all">
                <FaLinkedin className='size-10 md:size-16 lg:size-8' />
              </Link>
              <Link href="https://x.com/tanmoy_OG" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent active:text-accent active:scale-90 transition-all">
                <FaXTwitter className='size-10 md:size-16 lg:size-8' />
              </Link>
              <Link href="https://github.com/tanmoy-OG/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent active:text-accent active:scale-90 transition-all">
                <FaGithub className='size-10 md:size-16 lg:size-8' />
              </Link>
              <Link href="https://instagram.com/tanmoy_og/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent active:text-accent active:scale-90 transition-all">
                <FaInstagram className='size-10 md:size-16 lg:size-8' />
              </Link>
            </div>
            <h1 className='mt-2 opacity-20 font-cursive text-base md:text-lg'>{'</div>'}</h1>
          </div>
          <div className="hidden md:flex md:flex-col md:gap-4 lg:block">
            <h1 className='-ml-2 mt-2 opacity-20 font-cursive text-lg md:-ml-4 md:mt-4'>
              {'<section>'}
            </h1>
            <div className='ml-6 mr-16 flex justify-between lg:mx-8'>
              <Stats count={projects.length} line1='Projects' line2='Completed' />
              <Stats count={skills.length} line1='Technologies' line2='Mastered' />
              <Stats count={githubCommits} line1='Github(2025)' line2='Contributions' />
            </div>
            <h1 className='-ml-2 opacity-20 font-cursive text-lg md:-ml-4' id='about'>
              {'</section>'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
