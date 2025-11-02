import { Card, CardTitle, CardHeader, CardContent } from '@/ui/card';
import { GlobeDemo } from '@/ui/github-globe';

const para1 = `I was introduced to the world of programming back in middle school (2014), when JAVA was introduced to the curriculum. Back then the lab computers were still running on windows XP. Fast-forward to today, I am a web developer based in Kolkata.`;
const para2 = `I started digging the rabbit hole of web technologies and ui design during my 3rd year of university, after my first hackathon experience. These past years, I've had the privilege to participate in multiple hackathon and work with other aspiring and amazing devs.`;
const para3 = `Apart from my work- I'm also a digital art hobbyist, I do fan arts and character design. I enjoy watching movies, anime, engaging in mind stimulating conversations, running marathons, hitting the gym, occasional sports, and sometimes reading.`;

const About = () => {
  return (
    <div className='flex flex-col px-4 md:px-6 lg:px-8 relative'>
      <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-28 px-4 md:px-6 lg:px-8 z-20'>
        <div className='w-full lg:w-1/2'>
          <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<h1>'}</h1>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-accent'>{'Know Me'}</h1>
          <h1 className='ml-24 md:ml-36 lg:ml-48 -mt-4 md:-mt-5 lg:-mt-6 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>
            {'</h1>'}
          </h1>
          <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg'>{'<p>'}</h1>
          <div className='flex flex-col gap-3 md:gap-4 font-sans-desc opacity-70 text-sm md:text-base'>
            <p className=''>{para1}</p>
            <p className=''>{para2}</p>
            <p className=''>{para3}</p>
          </div>
          <h1 className='-ml-4 md:-ml-6 lg:-ml-8 opacity-20 font-cursive text-sm md:text-base lg:text-lg' id='experience'>{'</p>'}</h1>
        </div>
        <div className='w-full lg:w-1/2'>
          <Card className='w-full max-w-sm flex flex-col py-6 md:py-7 lg:py-8 gap-6 md:gap-7 lg:gap-8 bg-muted/70 backdrop-blur-xs border-foreground/10 h-fit shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:border-foreground/20 hover:backdrop-blur-sm hover:-translate-y-2 transition-all'>
            <CardHeader>
              <CardTitle className='text-3xl md:text-4xl lg:text-5xl text-accent font-normal'>
                {'What can I do?'}
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-3 md:gap-4 px-4 md:px-6 lg:px-8 font-sans-desc opacity-70 text-sm md:text-base'>
              <p>{'I mainly do full-stack Web Development and UI/UX Design'}</p>
              <p>{'Currently I am also learning React-Native for Android'}</p>
              <p>{"I've also started learning ML"}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="hidden md:block absolute w-full -mt-60 md:-mt-72 lg:-mt-80 ml-32 md:ml-44 lg:ml-52 opacity-30 md:opacity-40 lg:opacity-50 pointer-events-none">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default About;
