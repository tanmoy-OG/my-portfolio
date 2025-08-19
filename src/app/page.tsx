import Link from 'next/link';
import NavigationLink from '@/components/landing/navigation-link';

export default function Home() {
  return (
    <main className='min-h-screen bg-card flex'>
      <aside className='bg-background basis-1/5 flex flex-col justify-between *:flex *:flex-col *:h-fit *:px-8 *:py-4 *:gap-2'>
        <div className='!pt-8'>
          <h1 className='text-lg text-primary'>Tanmoy_OG</h1>
          <h1 className='text-lg/6'>Web Developer & Designer</h1>
          <p className='text-xs'>
            I build elegant and functional websites with fully responsive
            design.
          </p>
        </div>
        <div className='*:text-xs *:font-bold *:uppercase *:tracking-wide *:flex *:items-center *:gap-4 *:opacity-50 *:hover:opacity-100'>
          <NavigationLink path='#about' linkName='About' />
          <NavigationLink path='#experience' linkName='Experience' />
          <NavigationLink path='#projects' linkName='Projects' />
          <NavigationLink path='#skills' linkName='Achievements & Skills' />
          <NavigationLink path='#blog' linkName='Blog' />
          <NavigationLink path='#connect' linkName='Get in Touch' />
        </div>
        <div className='!pb-8'>
          <h1>Coding Profiles</h1>
          <div className='flex flex-col gap-1 *:text-xs'>
            <Link href='path'>LeetCode</Link>
            <Link href='path'>Codeforces</Link>
            <Link href='path'>CodeChef</Link>
            <Link href='path'>GeeksForGeeks</Link>
          </div>
        </div>
      </aside>
      <div className='basis-4/5'></div>
    </main>
  );
}
