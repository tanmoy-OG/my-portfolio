import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

import Stats from './hero-stats';
import { getGithubContributions } from '@/lib/github';
import projects from '@/assets/data/projects.json';
import skills from '@/assets/data/skills.json';
import Link from 'next/link';

const Hero = async () => {
  const githubCommits = await getGithubContributions('tanmoy-OG');
  return (
    <div className='h-screen place-content-center flex flex-col gap-4 md:block md:h-auto md:place-content-normal text-2xl'>
      <h1 className='opacity-20 font-cursive text-base lg:text-lg'>{'<html>'}</h1>
      <div className='flex flex-col gap-4 md:block mx-2 md:mx-3 lg:mx-4'>
        <h1 className='opacity-20 font-cursive text-base lg:text-lg'>{'<body>'}</h1>
        <div className='mx-2 flex flex-col gap-16 md:block md:mx-3 lg:mx-4 mt-2 md:mt-3 lg:mt-4'>
          <div className="flex flex-col gap-4">
            <h1 className='opacity-20 font-cursive text-base lg:text-lg'>{'<h1>'}</h1>
            <div className='mx-4 flex flex-col gap-8 md:mx-6 lg:mx-8'>
              <div className="text-6xl md:text-4xl lg:text-5xl">
                <h1 className=''>{'Hi,'}</h1>
                <h1 className=''>
                  {"I'm "}
                  <span className='text-accent'>{'Tanmoy'}</span>
                </h1>
              </div>
              <div className='text-5xl md:text-4xl lg:text-5xl'>
                <h1 className='break-words'>{'Web Developer '}
                  <span className='block md:inline'>{'& Designer'}</span>
                </h1>
              </div>
            </div>
            <h1 className='ml-64 lg:ml-132 -mt-8 md:-mt-5 lg:-mt-6 opacity-20 font-cursive text-base lg:text-lg'>
              {'</h1>'}
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className='mt-2 md:mt-3 lg:mt-4 opacity-20 font-cursive text-base lg:text-lg'>{'<div>'}</h1>
            <div className='flex gap-6 lg:gap-8 mx-4 md:mx-6 lg:mx-8 mt-2'>
              <Link href="https://linkedin.com/in/tanmoy-choudhury/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
                <FaLinkedin className='size-10 lg:size-8' />
              </Link>
              <Link href="https://x.com/tanmoy_OG" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
                <FaXTwitter className='size-10 lg:size-8' />
              </Link>
              <Link href="https://github.com/tanmoy-OG/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
                <FaGithub className='size-10 lg:size-8' />
              </Link>
              <Link href="https://instagram.com/tanmoy_og/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
                <FaInstagram className='size-10 lg:size-8' />
              </Link>
            </div>
            <h1 className='mt-2 opacity-20 font-cursive text-base lg:text-lg'>{'</div>'}</h1>
          </div>
          <div className="hidden md:block">
            <h1 className='-ml-2 md:-ml-3 lg:-ml-4 mt-2 md:mt-3 lg:mt-4 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
              {'<section>'}
            </h1>
            <div className='mx-4 md:mx-6 lg:mx-8 md:flex flex-col sm:flex-row justify-between gap-4 md:gap-6'>
              <Stats count={projects.length} line1='Projects' line2='Completed' />
              <Stats count={skills.length} line1='Technologies' line2='Mastered' />
              <Stats count={githubCommits} line1='Github(2025)' line2='Contributions' />
            </div>
            <h1 className='-ml-2 md:-ml-3 lg:-ml-4 opacity-20 font-cursive text-sm md:text-base lg:text-lg' id='about'>
              {'</section>'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
