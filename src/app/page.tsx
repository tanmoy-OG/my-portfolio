import Aside from '@/landing/aside';
import Background from '@/landing/background';
import Hero from '@/landing/hero';
import Cols from '@/layout/cols';

export default function Home() {
  return (
    <main className='min-h-screen bg-primary flex flex-row-reverse text-foreground font-sans'>
      <Aside /> {/* bg-background basis-1/5 flex flex-col justify-between */}
      <div className='basis-4/5 flex flex-col gap-8 relative'>
        <Hero />
        <Background />
        <Cols ml={0} />
        <Cols ml={8} />
        <Cols ml={16} />
        <Cols ml={24} />
        <Cols ml={32} />
        <Cols ml={40} />
        <Cols ml={48} />
        <Cols ml={56} />
        <Cols ml={64} />
        <Cols ml={72} />
      </div>
    </main>
  );
}
