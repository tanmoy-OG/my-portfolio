import Link from 'next/link';

import { NavProps } from '@/types/api';

const NavigationLink = ({ path, linkName }: NavProps) => {
  return (
    <div className='group w-fit hover:cursor-pointer'>
      <div className='h-0.5 w-6 rounded bg-foreground group-hover:w-16 transition-all'></div>
      <Link href={path}>{linkName}</Link>
    </div>
  );
};

export default NavigationLink;
