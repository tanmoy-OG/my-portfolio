import ConnectMessage from './connect-message';
import ConnectLink from './connect-links';
import { WorldMapDemo } from '@/ui/world-map-demo';

const Connect = () => {
  const para1 = `I am open to freelance opportunities- especially small projects. How ever I am all ears for other requests as well.`;
  const para2 = `Feel free to send me a message via the form below. Or use the contact links listed beside.`;

  return (
    <div className='px-16 flex flex-col justify-between gap-8' id='connect'>
      <div className="flex justify-between gap-16">
        <div className='w-1/2'>
          <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
          <h1 className='text-5xl text-accent'>{"Let's Talk"}</h1>
          <h1 className='ml-48 -mt-6 opacity-20 font-cursive text-lg'>
            {'</h1>'}
          </h1>
          <div className=''>
            <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<p>'}</h1>
            <div className='flex flex-col gap-4 font-sans-desc opacity-70'>
              <p className=''>{para1}</p>
              <p className=''>{para2}</p>
            </div>
            <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'</p>'}</h1>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-end">
          <WorldMapDemo />
        </div>
      </div>
      <div className='flex flex-col gap-4 font-sans-desc'>
        <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<form>'}</h1>
        <div className='flex justify-between gap-14'>
          <ConnectMessage />
          <ConnectLink />
        </div>
        <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'</form>'}</h1>
      </div>
    </div>
  );
};

export default Connect;
