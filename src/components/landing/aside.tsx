'use client';
import { useState, useEffect } from 'react';
import NavigationLink from './aside-nav-links';
import { LinkPreview } from '@/ui/link-preview';
import { LuMenu, LuX } from 'react-icons/lu';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'connect'];
    const sectionElements: { id: string; element: HTMLElement }[] = [];

    // Collect all section elements
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionElements.push({ id: sectionId, element });
      }
    });

    const updateActiveSection = () => {
      // Special case: if we're at the very top, always show home
      if (window.scrollY < 150) {
        setActiveSection('home');
        return;
      }

      const triggerPoint = window.scrollY + window.innerHeight * 0.3;
      let activeId = '';
      let minDistance = Infinity;

      // Find the section that contains or is closest to the trigger point
      sectionElements.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + rect.height;

        // If trigger point is within this section
        if (triggerPoint >= elementTop && triggerPoint <= elementBottom) {
          const distance = Math.abs(triggerPoint - elementTop);
          if (distance < minDistance) {
            minDistance = distance;
            activeId = id;
          }
        }
      });

      // If no section contains the trigger point, find the closest section above it
      if (!activeId) {
        sectionElements.forEach(({ id, element }) => {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          // If section is above trigger point
          if (elementBottom <= triggerPoint) {
            const distance = triggerPoint - elementBottom;
            if (distance < minDistance) {
              minDistance = distance;
              activeId = id;
            }
          }
        });
      }

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    // Initial check
    updateActiveSection();

    // Update on scroll with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {/* <Link href="#home" onClick={handleClick} className='hover:cursor-pointer transition-all'>
            <h1 className='text-lg text-accent'>{'Tanmoy_OG'}</h1>
          </Link> */}
          <NavigationLink type='home' path='#home' linkName='Tanmoy_OG' isActive={activeSection === 'home'} />
          {/* <NavigationLink path='#home' linkName='Tanmoy_OG' /> */}
          <h1 className='text-lg/6'>{'Web Developer & Designer'}</h1>
          <p className='text-xs opacity-50 font-sans-desc'>
            {'Software Engineer / Web Developer / UI/UX Designer'}
          </p>
        </div>
        <div className='*:text-sm *:font-bold *:uppercase *:tracking-wider *:flex *:items-center *:gap-4 *:hover:opacity-100 *:hover:tracking-widest'>
          <NavigationLink type='link' path='#about' linkName='About' isActive={activeSection === 'about'} />
          <NavigationLink type='link' path='#experience' linkName='Experience' isActive={activeSection === 'experience'} />
          <NavigationLink type='link' path='#projects' linkName='Projects' isActive={activeSection === 'projects'} />
          <NavigationLink type='link' path='#skills' linkName='Skills' isActive={activeSection === 'skills'} />
          {/* <NavigationLink type='link' path='#blog' linkName='Blog' /> */}
          <NavigationLink type='link' path='#connect' linkName='Get in Touch' isActive={activeSection === 'connect'} />
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
        className={`fixed top-0 left-0 w-4/5 max-w-sm h-screen z-50 bg-background border-r border-foreground/10 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between *:flex *:flex-col *:h-fit *:px-8 *:py-4 *:gap-2 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className='!pt-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg text-accent'>{'Tanmoy_OG'}</h1>
          </div>
          <h1 className='text-lg/6'>{'Web Developer & Designer'}</h1>
          <p className='text-xs opacity-50 font-sans-desc'>
            {'Software Engineer / Web Developer / UI/UX Designer'}
          </p>
        </div>
        <div className='*:text-sm *:font-bold *:uppercase *:tracking-wider *:flex *:items-center *:gap-4 *:opacity-50 *:hover:opacity-100 *:hover:tracking-widest'>
          <NavigationLink type='link' path='#about' linkName='About' onClick={closeMenu} isActive={activeSection === 'about'} />
          <NavigationLink type='link' path='#experience' linkName='Experience' onClick={closeMenu} isActive={activeSection === 'experience'} />
          <NavigationLink type='link' path='#projects' linkName='Projects' onClick={closeMenu} isActive={activeSection === 'projects'} />
          <NavigationLink type='link' path='#skills' linkName='Skills' onClick={closeMenu} isActive={activeSection === 'skills'} />
          {/* <NavigationLink type='link' path='#blog' linkName='Blog' onClick={closeMenu} /> */}
          <NavigationLink type='link' path='#connect' linkName='Get in Touch' onClick={closeMenu} isActive={activeSection === 'connect'} />
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
