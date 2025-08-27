import Link from 'next/link';

interface Props {
  path: string;
  linkName: string;
}

const NavigationLink = ({ path, linkName }: Props) => {
  return (
    <div className='group w-fit hover:cursor-pointer'>
      <div className='h-0.5 w-6 rounded bg-foreground group-hover:w-16 transition-all'></div>
      <Link href={path}>{linkName}</Link>
    </div>
  );
};

export default NavigationLink;
