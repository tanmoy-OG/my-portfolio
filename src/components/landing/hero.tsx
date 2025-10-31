import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

import Stats from './hero-stats';
import { getGithubContributions } from '@/lib/github';
import projects from '@/assets/data/projects.json';
import skills from '@/assets/data/skills.json';
import Link from 'next/link';

const Hero = async () => {
  const githubCommits = await getGithubContributions('tanmoy-OG');
  return (
    <div className='text-2xl'>
      <h1 className='opacity-20 font-cursive text-lg'>{'<html>'}</h1>
      <div className='mx-4'>
        <h1 className='opacity-20 font-cursive text-lg'>{'<body>'}</h1>
        <div className='mx-4 mt-4'>
          <h1 className='opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
          <div className='mx-8'>
            <h1 className='text-5xl'>{'Hi,'}</h1>
            <h1 className='text-5xl'>
              {"I'm "}
              <span className='text-accent'>{'Tanmoy'}</span>
            </h1>
            <div className='text-5xl'>
              <h1>{'Web Developer & Designer'}</h1>
            </div>
          </div>
          <h1 className='ml-132 -mt-6 opacity-20 font-cursive text-lg'>
            {'</h1>'}
          </h1>
          <h1 className='mt-4 opacity-20 font-cursive text-lg'>{'<div>'}</h1>
          <div className='flex gap-8 mx-8 mt-2'>
            <Link href="https://linkedin.com/in/tanmoy-choudhury/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
              <FaLinkedin className='size-8' />
            </Link>
            <Link href="https://x.com/tanmoy_OG" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
              <FaXTwitter className='size-8' />
            </Link>
            <Link href="https://github.com/tanmoy-OG/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
              <FaGithub className='size-8' />
            </Link>
            <Link href="https://instagram.com/tanmoy_og/" className="hover:shadow-lg/50 hover:-translate-y-2 hover:scale-110 hover:text-accent transition-all">
              <FaInstagram className='size-8' />
            </Link>
          </div>
          <h1 className='mt-2 opacity-20 font-cursive text-lg'>{'</div>'}</h1>
          <h1 className='-ml-4 mt-4 opacity-20 font-cursive text-lg'>
            {'<section>'}
          </h1>
          <div className='mx-8 flex justify-between'>
            <Stats count={projects.length} line1='Projects' line2='Completed' />
            <Stats count={skills.length} line1='Technologies' line2='Mastered' />
            <Stats count={githubCommits} line1='Github(2025)' line2='Contributions' />
          </div>
          <h1 className='-ml-4 opacity-20 font-cursive text-lg' id='about'>
            {'</section>'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
