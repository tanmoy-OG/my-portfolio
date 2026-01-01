import Image from 'next/image';

import { Card, CardContent } from '@/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextPopup,
  CarouselPreviousPopup,
} from '@/ui/carousel';

interface Params {
  title: string;
  gallery: string[];
  isPopup: any;
  initialIndex?: number;
}

const DialogueImage = ({
  title,
  gallery,
  isPopup,
  initialIndex = 0,
}: Params) => {
  return (
    <div
      className='fixed flex justify-center top-0 left-0 size-full z-20 py-8 backdrop-blur-lg'
      onClick={() => isPopup(false)}
    >
      <Card
        className='w-11/12 lg:w-5/6 px-4 lg:px-16 py-8 h-fit lg:h-auto my-auto lg:my-0 flex justify-center items-center bg-muted/70 border-foreground/10 shadow-secondary'
        onClick={e => e.stopPropagation()}
      >
        <Carousel
          className='w-full flex flex-col gap-4 lg:block'
          opts={{ startIndex: initialIndex }}
        >
          <CarouselContent>
            {gallery.map((link, id) => (
              <CarouselItem key={id}>
                <div className='p-1'>
                  <Card className='p-0 group'>
                    <CardContent className='flex items-center justify-center p-0'>
                      <Image
                        src={link}
                        alt={title}
                        width={1600}
                        height={10}
                        sizes='(max-width: 1024px) 90vw, 80vw'
                        className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all'
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex lg:hidden gap-8 w-full justify-center'>
            <CarouselPreviousPopup />
            <CarouselNextPopup />
          </div>
          <div className='hidden lg:flex gap-8 w-full justify-center'>
            <CarouselPreviousPopup />
            <CarouselNextPopup />
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default DialogueImage;
