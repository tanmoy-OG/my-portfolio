import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhone, LuMapPin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const ConnectLink = () => {
  const emailId = process.env['PROF_EMAIL_ID'];
  const phNo = process.env['PROF_PH_NO'];
  const waNo = process.env['PROF_WA_NO'];

  return (
    <div className='w-full md:w-fit lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-3 md:gap-32 lg:gap-4 md:mx-auto lg:mx-0'>
      <div className='flex flex-col gap-4'>
        <Link
          href={`mailto:${emailId}`}
          className='flex gap-3 md:gap-4 items-center z-20'
        >
          <MdOutlineEmail className='size-4 md:size-5 flex-shrink-0' />
          <div className='w-fit group'>
            <h1 className='text-sm md:text-base break-words'>
              {emailId}
            </h1>
            <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
          </div>
        </Link>
        <Link
          href={`tel:${phNo}`}
          className='flex gap-3 md:gap-4 items-center z-20'
        >
          <LuPhone className='size-4 md:size-5 flex-shrink-0' />
          <div className='w-fit group'>
            <h1 className='text-sm md:text-base'>{phNo}</h1>
            <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
          </div>
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        {waNo && (
          <Link
            href={waNo}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-3 md:gap-4 items-center z-20'
          >
            <FaWhatsapp className='size-4 md:size-5 flex-shrink-0' />
            <div className='w-fit group'>
              <h1 className='text-sm md:text-base'>{'Whatsapp Me'}</h1>
              <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
            </div>
          </Link>
        )}
        <Link
          href='https://maps.app.goo.gl/o2tqHirK8JoKfx4U9'
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-3 md:gap-4 items-center z-20'
        >
          <LuMapPin className='size-4 md:size-5 flex-shrink-0' />
          <div className='w-fit group'>
            <h1 className='text-sm md:text-base'>{'Kolkata, WB, India'}</h1>
            <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConnectLink;
