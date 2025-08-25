import ExpJob from "./exp-job";
import ExpProject from "./exp-project";
import jobList from "@/data/experience.json"
import projList from "@/data/projects.json"

const Experience = async () => {
    return (
        <div className="flex flex-col justify-between gap-32 px-24 z-20 -mt-8">
            <h1 className="text-5xl text-accent">{'My Portfolio'}</h1>
            <div className="">
                {jobList.map((data, id) => (
                    <ExpJob key={id} date={data.date} company={data.company} designation={data.designation} location={data.location} work={data.work} tech={data.tech} />
                ))}
            </div>
            <div className="mt-24">
                {projList.map((data, id) => (
                    <ExpProject key={id} gallery={data.gallery} date={data.date} title={data.title} team={data.team} hackathon={data.hackathon} org={data.organization} desc={data.description} tech={data.tech} externalLink={data.externalLink} gitHub={data.gitHub} installs={data.install} />
                ))}
            </div>
        </div>
    );
}

export default Experience;