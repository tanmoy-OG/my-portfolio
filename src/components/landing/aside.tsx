'use client';
import { useState } from 'react';
import NavigationLink from './aside-nav-links';
import { LinkPreview } from '@/ui/link-preview';
import { LuMenu, LuX } from 'react-icons/lu';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Mobile/Tablet */}
      <button
        onClick={toggleMenu}
        className='fixed top-4 right-4 z-50 lg:hidden bg-background/90 backdrop-blur-sm border border-foreground/10 p-3 rounded-md hover:bg-muted transition-all'
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <LuX className='size-6 text-foreground' />
        ) : (
          <LuMenu className='size-6 text-foreground' />
        )}
      </button>

      {/* Overlay - Mobile/Tablet */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden'
          onClick={closeMenu}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside className='hidden lg:flex fixed left-0 w-1/5 z-30 bg-background h-screen basis-1/5 flex-col justify-between *:flex *:flex-col *:h-fit *:px-8 *:py-4 *:gap-2'>
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

      {/* Mobile Menu Popup */}
      <aside
        className={`fixed top-0 left-0 w-4/5 max-w-sm h-screen z-50 bg-background border-r border-foreground/10 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between *:flex *:flex-col *:h-fit *:px-8 *:py-4 *:gap-2 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='!pt-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg text-accent'>{'Tanmoy_OG'}</h1>
            <button
              onClick={closeMenu}
              className='p-2 hover:bg-muted rounded-md transition-colors'
              aria-label='Close menu'
            >
              <LuX className='size-6 text-foreground' />
            </button>
          </div>
          <h1 className='text-lg/6'>{'Web Developer & Designer'}</h1>
          <p className='text-xs opacity-50 font-sans-desc'>
            {'Software Engineer / Web Developer / UI/UX Designer'}
          </p>
        </div>
        <div className='*:text-xs *:font-bold *:uppercase *:tracking-wide *:flex *:items-center *:gap-4 *:opacity-50 *:hover:opacity-100'>
          <NavigationLink path='#about' linkName='About' onClick={closeMenu} />
          <NavigationLink path='#experience' linkName='Experience' onClick={closeMenu} />
          <NavigationLink path='#projects' linkName='Projects' onClick={closeMenu} />
          <NavigationLink path='#skills' linkName='Skills' onClick={closeMenu} />
          {/* <NavigationLink path='#blog' linkName='Blog' onClick={closeMenu} /> */}
          <NavigationLink path='#connect' linkName='Get in Touch' onClick={closeMenu} />
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
    </>
  );
};

export default Aside;
