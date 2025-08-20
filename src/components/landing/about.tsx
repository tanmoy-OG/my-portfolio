import { Card, CardTitle, CardHeader, CardContent } from "../ui/card"

const para1 = `I was introduced to the world of programming back in middle school (2014), when JAVA was introduced to the curriculum. Back then the lab computers were still running on windows XP. Fast-forward to today, I am a web developer based in Kolkata.`
const para2 = `I started digging the rabbit hole of web technologies and ui design during my 3rd year of university, after my first hackathon experience. These past years, I've had the privilege to participate in multiple hackathon and work with other aspiring and amazing devs.`
const para3 = `Apart from my work- I'm also a digital art hobbyist, I do fan arts and character design. I enjoy watching movies, anime, engaging in mind stimulating conversations, running marathons, hitting the gym, occasional sports, and sometimes reading.`

const About = () => {
    return (
        <div className="flex justify-between gap-16 px-24">
            <div className="flex my-8 w-1/2 flex-col justify-between gap-8">
                <h1 className="text-5xl text-accent">{'Know Me'}</h1>
                <div className="flex flex-col gap-4 font-sans-desc opacity-50">
                    <p className="">{para1}</p>
                    <p className="">{para2}</p>
                    <p className="">{para3}</p>
                </div>
            </div>
            {/* <div className="flex flex-col gap-8 bg-muted p-8 h-fit">
                <h1 className="text-5xl">{'What can I do?'}</h1>
                <div className="flex flex-col gap-4 font-sans-desc">
                    <p>{'I mainly do full-stack Web Development and UI/UX Design'}</p>
                    <p>{'Currently I am also learning React-Native for Android'}</p>
                    <p>{'I\'ve also started learning ML'}</p>
                </div>
            </div> */}
            <Card className="w-full max-w-sm flex flex-col py-8 gap-8 bg-muted h-fit shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 transition-all">
                <CardHeader>
                    <CardTitle className="text-5xl text-accent font-normal">{'What can I do?'}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 px-8 font-sans-desc opacity-50">
                    <p>{'I mainly do full-stack Web Development and UI/UX Design'}</p>
                    <p>{'Currently I am also learning React-Native for Android'}</p>
                    <p>{'I\'ve also started learning ML'}</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default About;