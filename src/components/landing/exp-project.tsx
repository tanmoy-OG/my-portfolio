import { Card, CardContent } from "@/ui/card"
import { Badge } from "@/ui/badge";
import Image from 'next/image';

export interface Proj {
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

const ExpProject = ({ gallery, date, title, team, hackathon, org, desc, tech, externalLink, gitHub, installs }: Proj) => {
    return (
        <Card className="py-8 bg-secondary/50 backdrop-blur-xs shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:-translate-y-2 hover:backdrop-blur-sm transition-all">
            <CardContent className="flex w-full flex-row gap-8">
                <div className="basis-1/4 flex flex-col gap-2">
                    {gallery[0] && <Image src={gallery[0]} width='150' height='150' alt='' className="rounded-sm w-full object-cover" />}
                    <h1 className="mt-1.5 font-sans-desc opacity-50">{date.from + ' - ' + date.to}</h1>
                </div>
                <div className="basis-3/4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">{title}</p>
                        <div className="flex flex-col gap-0.5">
                            {team + hackathon && (
                                <p className="text-sm opacity-50">{'Team ' + team + (
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

export default ExpProject;