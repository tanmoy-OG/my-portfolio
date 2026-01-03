// app/project/[id]/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as React from 'react';
import { useState } from 'react';
import {
  LuArrowLeft,
  LuArrowUpRight,
  LuCodeXml,
  LuGlobe,
} from 'react-icons/lu';

import data from '@/data/projects.json';
import DialogueImage from '@/projects/dialogue-image';
import { PageProps, Proj } from '@/types/api';
import { Badge } from '@/ui/badge';
import { Card, CardTitle, CardHeader, CardContent } from '@/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/carousel';

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
  } catch {
    // Ignore decoding errors and use the original id
  }
  return {
    raw: decoded,
    slug: toSlug(decoded),
  };
}

export default function ProjectPage({ params }: PageProps) {
  const { id } = React.use(params);
  const list = data as Proj[];
  const { slug, raw } = normalizeParam(id);
  const project = list.find(p => toSlug(p.title) === slug || p.title === raw);
  const [popup, isPopup] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  if (!project) {
    notFound();
  }

  return (
    <div className='container bg-primary h-full min-h-screen max-w-full mx-auto flex flex-col gap-12 md:gap-16 py-16 md:py-20'>
      <div className='flex flex-col gap-4 px-8 md:px-10'>
        <Link
          href='/'
          className='w-fit group z-10 flex gap-1 items-center text-accent'
        >
          <LuArrowLeft className='-ml-1 pt-0.5 group-hover:-translate-x-2 transition-all' />
          <h1 className='font-bold font-sans-desc'>{'Tanmoy_OG'}</h1>
        </Link>
        <h1 className='text-5xl font-sans'>{project.title}</h1>
        <div className='flex flex-wrap gap-2 w-full md:w-1/2'>
          {project.tech.map((data, id) => (
            <Badge key={id}>{data}</Badge>
          ))}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-28 px-4 md:px-10 lg:px-18'>
        <div className='text-sm w-full lg:w-1/2 flex flex-col gap-6 md:gap-8'>
          {project.gallery[0] && (
            <Image
              src={project.gallery[0]}
              alt={project.title}
              width={1200}
              height={0}
              sizes='100vw'
              className='rounded-sm w-full object-cover border-2 border-foreground/10 hover:border-foreground/50 active:border-foreground/50 lg:hidden transition-all'
            />
          )}
          <div className='flex flex-col gap-4 lg:gap-6 px-4'>
            <p className='opacity-70'>{project.description}</p>
            <div className='flex lg:flex-col gap-8 lg:gap-2'>
              {project.externalLink && (
                <Link
                  href={project.externalLink}
                  className='w-fit group z-20 flex gap-1 items-center hover:text-accent'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LuGlobe className='size-5 mr-1' />
                  <h1 className='font-sans-desc font-bold text-sm md:text-base'>
                    {'View Live'}
                  </h1>
                  <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
              )}
              {project.gitHub && (
                <Link
                  href={project.gitHub}
                  className='w-fit group z-20 flex gap-1 items-center hover:text-accent'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LuCodeXml className='size-5 mr-1' />
                  <h1 className='font-sans-desc font-bold text-sm md:text-base'>
                    {'Source Code'}
                  </h1>
                  <LuArrowUpRight className='size-4 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all' />
                </Link>
              )}
            </div>
          </div>
          <div className="h-fit w-full lg:max-w-sm rounded-xl group">
            <Card className='w-full flex flex-col py-6 md:py-8 gap-2 bg-muted/70 backdrop-blur-xs border-foreground/10 h-fit shadow-secondary group-hover:shadow-accent group-hover:shadow-lg/50 group-hover:border-foreground/20 group-hover:backdrop-blur-sm group-hover:-translate-y-2 transition-all'>
              <CardHeader>
                <CardTitle className='text-base text-accent font-bold font-sans-desc'>
                  {'Features'}
                </CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col gap-2 px-6 md:px-8 font-sans-desc opacity-70'>
                {project.features.map((text, id) => (
                  <p key={id}>{text}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='hidden w-full lg:w-1/2 md:flex flex-col gap-4 px-16 lg:px-12'>
          <Carousel className='w-full max-w-full'>
            <CarouselContent>
              {project.gallery.map((link, id) => (
                <CarouselItem key={id}>
                  <div className='p-1'>
                    <Card className='p-0 group'>
                      <CardContent className='flex items-center justify-center p-0'>
                        <Image
                          src={link}
                          alt={project.title}
                          width={1200}
                          height={0}
                          sizes='(max-width: 1024px) 100vw, 50vw'
                          className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all cursor-pointer'
                          onClick={() => {
                            setClickedIndex(id);
                            isPopup(true);
                          }}
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
      {popup && (
        <DialogueImage
          title={project.title}
          gallery={project.gallery}
          isPopup={isPopup}
          initialIndex={clickedIndex}
        />
      )}
    </div>
  );
}
