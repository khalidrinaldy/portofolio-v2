import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function DialogCarousel({
  trigger,
  data,
}: {
  trigger: React.ReactNode;
  data: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="w-[900px] min-w-[1200px] bg-transparent border-transparent">
        <Carousel className="w-full mx-auto">
          <CarouselContent>
            {Array.from({ length: data.length }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src={data[index]}
                  alt={`Slide ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain w-full rounded-sm"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
