// app/project/[id]/page.tsx
"use client"
import * as React from "react"
import { notFound } from 'next/navigation';
import data from '@/data/projects.json';
import { PageProps, Proj } from '@/types/api';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';
import { Card, CardTitle, CardHeader, CardContent } from '@/ui/card';
import { Badge } from '@/ui/badge';
import DialogueImage from '@/projects/dialogue-image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/carousel"
import Image from "next/image";
import { useState } from "react";

function toSlug(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

function normalizeParam(id: string) {
    // First decode percent-encoding; then build a comparable slug
    let decoded = id;
    try {
        decoded = decodeURIComponent(id);
    } catch { }
    return {
        raw: decoded,
        slug: toSlug(decoded),
    };
}

export default function ProjectPage({ params }: PageProps) {
    const { id } = params;
    const list = data as Proj[];
    const { slug, raw } = normalizeParam(id);
    const project = list.find((p) => toSlug(p.title) === slug || p.title === raw);
    const [popup, isPopup] = useState(false);

    if (!project) {
        notFound();
    }

    return (
        <div className="container bg-primary h-full min-h-screen mx-auto px-10 py-20 flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <Link href='/' className='w-fit group z-10 flex gap-1 items-center text-accent'>
                    <LuArrowLeft className='-ml-1 pt-0.5 group-hover:-translate-x-2 transition-all' />
                    <h1 className='font-bold font-sans-desc'>
                        {'Tanmoy_OG'}
                    </h1>
                </Link>
                <h1 className='text-5xl font-sans'>{project.title}</h1>
                <div className='flex gap-2 w-1/2'>
                    {project.tech.map((data, id) => (
                        <Badge key={id}>{data}</Badge>
                    ))}
                </div>
            </div>
            <div className="flex justify-between gap-28 px-8">
                <div className="text-sm w-1/2 flex flex-col gap-8">
                    <p className='opacity-70'>{project.description}</p>
                    <Card className='w-full max-w-sm flex flex-col py-8 gap-2 bg-muted border-foreground/10 h-fit shadow-secondary hover:shadow-accent hover:shadow-lg/50 hover:border-foreground/20 hover:-translate-y-2 transition-all'>
                        <CardHeader>
                            <CardTitle className='text-base text-accent font-bold font-sans-desc'>
                                {'Features'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-2 px-8 font-sans-desc opacity-70'>
                            <p>{'I mainly do full-stack Web Development and UI/UX Design'}</p>
                            <p>{'Currently I am also learning React-Native for Android'}</p>
                            <p>{"I've also started learning ML"}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-1/2 flex flex-col gap-4 px-12">
                    <Carousel className="w-full max-w-full">
                        <CarouselContent>
                            {project.gallery.map((link, id) => (
                                <CarouselItem key={id}>
                                    <div className="p-1">
                                        <Card className="p-0 group">
                                            <CardContent className="flex items-center justify-center p-0">
                                                <Image src={link} alt={project.title} width={100} height={100} className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all'
                                                onClick={() => isPopup(true)} 
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            {popup && <DialogueImage title={project.title} gallery={project.gallery} isPopup={isPopup} />}
        </div>
    );
}
