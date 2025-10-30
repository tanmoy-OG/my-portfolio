import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhone, LuMapPin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const ConnectLink = () => {
    return (
        <div className='w-1/3 flex flex-col gap-4'>
            <Link
                href='mailto:connect@tanmoy-og.dev'
                className='flex gap-4 items-center z-20'
            >
                <MdOutlineEmail className='size-5' />
                <div className='w-fit group'>
                    <h1>{'connect@tanmoy-og.dev'}</h1>
                    <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                </div>
            </Link>
            <Link
                href='tel:+91 82401 06882'
                className='flex gap-4 items-center z-20'
            >
                <LuPhone className='size-5' />
                <div className='w-fit group'>
                    <h1>{'+91 82401 06882'}</h1>
                    <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                </div>
            </Link>
            <Link
                href='https://wa.me/918240106882'
                className='flex gap-4 items-center z-20'
            >
                <FaWhatsapp className='size-5' />
                <div className='w-fit group'>
                    <h1>{'Whatsapp Me'}</h1>
                    <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                </div>
            </Link>
            <Link
                href='https://maps.app.goo.gl/o2tqHirK8JoKfx4U9'
                className='flex gap-4 items-center z-20'
            >
                <LuMapPin className='size-5' />
                <div className='w-fit group'>
                    <h1>{'Kolkata, WB, India'}</h1>
                    <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                </div>
            </Link>
        </div>
    );
}

export default ConnectLink;