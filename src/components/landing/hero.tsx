import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

import Stats from './stats';

const Hero = () => {
  return (
    <div className='px-24 py-38 text-2xl'>
      <h1 className=''>{'Hi,'}</h1>
      <h1 className=''>
        {"I'm "}
        <span className='text-accent'>{'Tanmoy Choudhury'}</span>
      </h1>
      <div className='text-4xl'>
        <h1>{'Web Developer'}</h1>
        <h1 className=''>{'& Designer'}</h1>
      </div>
      <div className='flex gap-8 my-8'>
        <FaLinkedin className='size-8' />
        <FaXTwitter className='size-8' />
        <FaGithub className='size-8' />
        <FaInstagram className='size-8' />
      </div>
      <div className='flex justify-between my-18'>
        <Stats count={6} line1='Projects' line2='Completed' />
        <Stats count={10} line1='Technologies' line2='Mastered' />
        <Stats count={614} line1='Github' line2='Commits' />
      </div>
    </div>
  );
};

export default Hero;
