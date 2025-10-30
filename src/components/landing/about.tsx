import { Card, CardTitle, CardHeader, CardContent } from '@/ui/card';
import { GlobeDemo } from '@/ui/github-globe';

const para1 = `I was introduced to the world of programming back in middle school (2014), when JAVA was introduced to the curriculum. Back then the lab computers were still running on windows XP. Fast-forward to today, I am a web developer based in Kolkata.`;
const para2 = `I started digging the rabbit hole of web technologies and ui design during my 3rd year of university, after my first hackathon experience. These past years, I've had the privilege to participate in multiple hackathon and work with other aspiring and amazing devs.`;
const para3 = `Apart from my work- I'm also a digital art hobbyist, I do fan arts and character design. I enjoy watching movies, anime, engaging in mind stimulating conversations, running marathons, hitting the gym, occasional sports, and sometimes reading.`;

const About = () => {
  return (
    <div className='flex flex-col px-8'>
      <div className='flex justify-between gap-28 px-8 z-20'>
        <div className='w-1/2'>
          <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
          <h1 className='text-5xl text-accent'>{'Know Me'}</h1>
          <h1 className='ml-48 -mt-6 opacity-20 font-cursive text-lg'>
            {'</h1>'}
          </h1>
          <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<p>'}</h1>
          <div className='flex flex-col gap-4 font-sans-desc opacity-70'>
            <p className=''>{para1}</p>
            <p className=''>{para2}</p>
            <p className=''>{para3}</p>
          </div>
          <h1 className='-ml-8 opacity-20 font-cursive text-lg' id='experience'>{'</p>'}</h1>
        </div>
        <div className='w-1/2'>
          <Card className='w-full max-w-sm flex flex-col py-8 gap-8 bg-muted/70 backdrop-blur-xs border-foreground/10 h-fit shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:border-foreground/20 hover:backdrop-blur-sm hover:-translate-y-2 transition-all'>
            <CardHeader>
              <CardTitle className='text-5xl text-accent font-normal'>
                {'What can I do?'}
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4 px-8 font-sans-desc opacity-70'>
              <p>{'I mainly do full-stack Web Development and UI/UX Design'}</p>
              <p>{'Currently I am also learning React-Native for Android'}</p>
              <p>{"I've also started learning ML"}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute w-full -mt-80 ml-52 opacity-50">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default About;
