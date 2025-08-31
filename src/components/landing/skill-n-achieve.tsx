"use client"
import achievements from "@/data/achievements.json"
import skills from "@/data/skills.json"
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

const SkillNAchieve = () => {
    return (
        <div className="px-16 flex flex-col justify-between gap-8">
            <div className="">
                <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
                <h1 className='text-5xl text-accent'>{'Skills & Achievements'}</h1>
                <h1 className='ml-108 -mt-6 opacity-20 font-cursive text-lg'>{'</h1>'}</h1>
            </div>
            <div className="flex justify-between gap-28">
                <div className='w-1/2 flex flex-col gap-4'>
                    {achievements.map((data, id) => (
                        <p key={id} className="font-sans-desc opacity-50"><span>{data.desc}</span>{' - '}<span>{data.event}</span>{' ('}<span>{data.org}</span>{')'}</p>
                    ))}
                </div>
                <div className='w-1/2 text-accent -mt-8'>
                    <TagCloud
                        options={(w: Window & typeof globalThis): TagCloudOptions => ({
                            radius: Math.min(500, w.innerWidth, w.innerHeight) / 3,
                            maxSpeed: "fast",
                        })}
                        onClick={(tag: string) => alert(tag)}
                        onClickOptions={{ passive: true }}
                    >
                        {skills}
                    </TagCloud>
                </div>
            </div>
        </div>
    );
}

export default SkillNAchieve;