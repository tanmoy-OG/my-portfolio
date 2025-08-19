import Aside from '@/components/landing/aside';

export default function Home() {
  return (
    <main className='min-h-screen bg-card flex'>
      <Aside />
      <div className='basis-4/5'></div>
    </main>
  );
}
