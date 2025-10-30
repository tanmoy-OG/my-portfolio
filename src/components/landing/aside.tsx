import NavigationLink from './aside-nav-links';
import { LinkPreview } from '@/ui/link-preview';

const Aside = () => {
  return (
    <aside className='fixed left-0 w-1/5 z-30 bg-background h-screen basis-1/5 flex flex-col justify-between *:flex *:flex-col *:h-fit *:px-8 *:py-4 *:gap-2'>
      <div className='!pt-8'>
        <h1 className='text-lg text-accent'>{'Tanmoy_OG'}</h1>
        <h1 className='text-lg/6'>{'Web Developer & Designer'}</h1>
        <p className='text-xs opacity-50 font-sans-desc'>
          {'Software Engineer / Web Developer / UI/UX Designer'}
        </p>
      </div>
      <div className='*:text-xs *:font-bold *:uppercase *:tracking-wide *:flex *:items-center *:gap-4 *:opacity-50 *:hover:opacity-100'>
        <NavigationLink path='#about' linkName='About' />
        <NavigationLink path='#experience' linkName='Experience' />
        <NavigationLink path='#projects' linkName='Projects' />
        <NavigationLink path='#skills' linkName='Skills' />
        {/* <NavigationLink path='#blog' linkName='Blog' /> */}
        <NavigationLink path='#connect' linkName='Get in Touch' />
      </div>
      <div className='!pb-8'>
        <h1 className='text-accent'>Coding Profiles</h1>
        <div className='flex flex-col gap-1 *:text-xs'>
          <LinkPreview url="https://leetcode.com/u/tanmoy_og/" className="">
            LeetCode
          </LinkPreview>
          <LinkPreview url="https://codeforces.com/profile/tanmoy_OG" className="">
            Codeforces
          </LinkPreview>
          {/* <LinkPreview url="https://leetcode.com/u/tanmoy_og/" className="">
            CodeChef
          </LinkPreview> */}
          <LinkPreview url="https://www.geeksforgeeks.org/user/tanmoyog/" className="">
            GeeksForGeeks
          </LinkPreview>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
