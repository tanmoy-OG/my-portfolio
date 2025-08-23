import { Card, CardTitle, CardHeader, CardContent } from "@/ui/card"
import { Badge } from "@/ui/badge";
import jobList from "@/data/experience.json"
import projList from "@/data/projects.json"
import Image from 'next/image';

const Experience = async () => {

    return (
        <div className="flex flex-col justify-between gap-40 px-24">
            <h1 className="text-5xl text-accent">{'My Portfolio'}</h1>
            <div className="">
                {jobList.map((data, id) => (
                    <Job key={id} date={data.date} company={data.company} designation={data.designation} location={data.location} work={data.work} tech={data.tech} />
                ))}
            </div>
            <div className="">
                {projList.map((data, id) => (
                    <Project key={id} gallery={data.gallery} date={data.date} title={data.title} team={data.team} hackathon={data.hackathon} org={data.organization} desc={data.description} tech={data.tech} externalLink={data.externalLink} gitHub={data.gitHub} installs={data.install} />
                ))}
            </div>
        </div>
    );
}

export interface JobInterface {
    date: {
        from: string
        to: string | null
    }
    company: string,
    designation: string
    location: {
        city: string
        country: string
    }
    work: string
    tech: string[]
}

const Job = ({ date, company, designation, location, work, tech }: JobInterface) => {
    return (
        <Card className="py-8 bg-secondary/50 backdrop-blur-md shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 transition-all">
            <CardContent className="flex w-full flex-row gap-4">
                <div className="basis-1/4">
                    <h1 className="mt-1.5 font-sans-desc opacity-50">{date.from + ' - ' + date.to}</h1>
                </div>
                <div className="basis-3/4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">{designation + ' - ' + company}</p>
                        <p className="text-sm opacity-50">{location.city + ', ' + location.country}</p>
                    </div>
                    <p className="flex flex-col pr-2 gap-4 font-sans-desc opacity-50">
                        {work}
                    </p>
                    <div className="flex gap-2">
                        {tech.map((data, id) => (
                            <Badge key={id} className="rounded-full bg-cyan-950 text-accent px-3">{data}</Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export interface ProjInterface {
    gallery: string[]
    date: {
        from: string
        to: string | null
    }
    title: string,
    team: string,
    hackathon: string,
    org: {
        orgName: string
        platform: string
    }
    desc: string
    tech: string[]
    externalLink: string
    gitHub: string
    installs: string
}

const Project = ({ gallery, date, title, team, hackathon, org, desc, tech, externalLink, gitHub, installs }: ProjInterface) => {
    return (
        <Card className="py-8 bg-secondary/50 backdrop-blur-md shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 transition-all">
            <CardContent className="flex w-full flex-row gap-4">
                <div className="basis-1/4">
                    {gallery[0] && <Image src={gallery[0]} width='150' height='150' alt='' className="rounded-sm w-full object-cover" />}
                    <h1 className="mt-1.5 font-sans-desc opacity-50">{date.from + ' - ' + date.to}</h1>
                </div>
                <div className="basis-3/4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">{title}</p>
                        <div className="flex flex-col gap-1">
                            {team + hackathon && (
                                <p className="text-sm opacity-50">{team + (
                                    team && (hackathon && ' - ')
                                ) + hackathon}</p>
                            )}
                            <p className="text-sm opacity-50">{org.orgName + (org.platform && (' - ' + org.platform))}</p>
                        </div>
                    </div>
                    <p className="flex flex-col pr-2 gap-4 font-sans-desc opacity-50">
                        {desc}
                    </p>
                    <div className="flex gap-2">
                        {tech.map((data, id) => (
                            <Badge key={id} className="rounded-full bg-cyan-950 text-accent px-3">{data}</Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Experience;