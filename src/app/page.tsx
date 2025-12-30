import About from '@/landing/about';
import Aside from '@/landing/aside';
import Connect from '@/landing/connect';
import Experience from '@/landing/experience';
import Hero from '@/landing/hero';
import SkillNAchieve from '@/landing/skill-n-achieve';
import CursorTrail from '../components/effects/cursor-trail';

export default function Home() {
  return (
    <main id='home' className='min-h-screen bg-primary flex flex-row-reverse text-foreground font-sans'>
      <Aside /> {/* bg-background basis-1/5 flex flex-col justify-between */}
      <div className='w-full lg:basis-4/5 flex flex-col gap-20 md:gap-32 lg:gap-40 relative overflow-hidden'>
        <CursorTrail />
        <div className='px-4 md:p-6 lg:p-8 flex flex-col gap-20 md:gap-28 lg:gap-36 relative z-10'>
          <div className="flex flex-col gap-0 lg:gap-20">
            <Hero />
            <About />
          </div>
          <Experience />
          <SkillNAchieve />
          <Connect />
        </div>
        {/* <div className={`absolute w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-8 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-16 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-24 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-32 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-40 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-48 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-56 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-64 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-72 w-4 h-full bg-destructive/10 `}></div>
        <div className={`absolute ml-80 w-4 h-full bg-destructive/10 `}></div> */}
      </div>
    </main>
  );
}
