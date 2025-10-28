import { Card, CardContent } from '@/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/carousel"
import Image from "next/image";

interface Params {
    title: string;
    gallery: string[];
    isPopup: any;
}

const DialogueImage = ({ title, gallery, isPopup }: Params) => {
    return (
        <div className="fixed flex justify-center top-0 left-0 size-full z-20 py-8 backdrop-blur-lg" onClick={() => isPopup(false)}>
            <Card className="w-5/6 px-16 py-8 flex justify-center items-center bg-muted/70 border-foreground/10 shadow-secondary" onClick={(e) => e.stopPropagation()}>
                <Carousel className="max-w-11/12 w-full">
                    <CarouselContent>
                        {gallery.map((link, id) => (
                            <CarouselItem key={id}>
                                <div className="p-1">
                                    <Card className="p-0 group">
                                        <CardContent className="flex items-center justify-center p-0">
                                            <Image src={link} alt={title} width={100} height={100} className='rounded-sm w-full object-cover border-2 border-foreground/10 group-hover:border-foreground/50 transition-all' />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </Card>
        </div>
    );
}

export default DialogueImage;