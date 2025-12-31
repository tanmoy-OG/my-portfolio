'use client';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';

import { NavProps } from '@/types/api';

const NavigationLink = ({ type: variant, path, linkName, onClick, isActive }: NavProps & { onClick?: MouseEventHandler<HTMLAnchorElement>; isActive?: boolean }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) {
      onClick(event);
    }

    const targetId = path.startsWith('#') ? path.slice(1) : path;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();

      const yOffset = -80; // adjust if your layout changes (fixed header/spacing)
      const rect = targetElement.getBoundingClientRect();
      const targetY = rect.top + window.scrollY + yOffset;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
      window.history.replaceState(null, '', path);
    }
  };

  return variant === 'link' ? (
    <Link href={path} onClick={handleClick} className={`group w-fit hover:cursor-pointer ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <div className={`h-0.5 ${isActive ? 'w-10' : 'w-6'} rounded bg-foreground group-hover:w-10 transition-all`}></div>
      {linkName}
    </Link>
  ) : (
    <Link href={path} onClick={handleClick} className='hover:cursor-pointer transition-all w-fit'>
      <h1 className='text-lg text-accent'>{linkName}</h1>
    </Link>
  );
};

export default NavigationLink;
