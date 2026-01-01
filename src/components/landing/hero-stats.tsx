import { HeroStats } from '@/types/api';

const Stats = ({ count, line1, line2 }: HeroStats) => {
  return (
    <div className='flex items-end gap-2 lg:gap-4'>
      <span className='text-7xl lg:text-6xl text-accent'>{count}</span>
      <span className='w-16 text-2xl lg:text-lg'>
        {line1} {line2}
      </span>
    </div>
  );
};

export default Stats;
