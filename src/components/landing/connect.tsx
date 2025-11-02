import ConnectMessage from './connect-message';
import ConnectLink from './connect-links';
import { WorldMapDemo } from '@/ui/world-map-demo';
import ShimmerText from './shimmer-text';

const Connect = () => {
  const para1 = `I am open to freelance opportunities- especially small projects. How ever I am all ears for other requests as well.`;
  const para2 = `Feel free to send me a message via the form below. Or use the contact links listed beside.`;

  return (
    <div className='px-4 md:px-8 lg:px-16 flex flex-col justify-between gap-6 md:gap-7 lg:gap-8'>
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
        <div className='w-full lg:w-1/2 relative'>
          <ShimmerText mt={140} ml={96} mlNegative={false} text='Dm' />
          <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<h1>'}</h1>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-accent'>{"Let's Talk"}</h1>
          <h1 className='ml-24 md:ml-36 lg:ml-48 -mt-4 md:-mt-5 lg:-mt-6 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
            {'</h1>'}
          </h1>
          <div className=''>
            <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<p>'}</h1>
            <div className='flex flex-col gap-3 md:gap-4 font-sans-desc opacity-70 text-sm md:text-base'>
              <p className=''>{para1}</p>
              <p className=''>{para2}</p>
            </div>
            <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'</p>'}</h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full flex flex-col justify-end">
          <WorldMapDemo />
        </div>
      </div>
      <div className='flex flex-col gap-3 md:gap-4 font-sans-desc'>
        <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<form>'}</h1>
        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-14'>
          <ConnectMessage />
          <ConnectLink />
        </div>
        <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'</form>'}</h1>
      </div>
    </div>
  );
};

export default Connect;
