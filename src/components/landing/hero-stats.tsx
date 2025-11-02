import { HeroStats } from "@/types/api";

const Stats = ({ count, line1, line2 }: HeroStats) => {
  return (
    <div className='flex items-end gap-2 md:gap-3 lg:gap-4'>
      <span className='text-4xl md:text-5xl lg:text-6xl text-accent'>{count}</span>
      <span className='w-12 md:w-14 lg:w-16 text-sm md:text-base lg:text-lg'>
        {line1} {line2}
      </span>
    </div>
  );
};

export default Stats;
