import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

import Stats from './hero-stats';

const Hero = () => {
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
            <FaLinkedin className='size-8' />
            <FaXTwitter className='size-8' />
            <FaGithub className='size-8' />
            <FaInstagram className='size-8' />
          </div>
          <h1 className='mt-2 opacity-20 font-cursive text-lg'>{'</div>'}</h1>
          <h1 className='-ml-4 mt-4 opacity-20 font-cursive text-lg'>
            {'<section>'}
          </h1>
          <div className='mx-8 flex justify-between'>
            <Stats count={6} line1='Projects' line2='Completed' />
            <Stats count={10} line1='Technologies' line2='Mastered' />
            <Stats count={614} line1='Github' line2='Commits' />
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
