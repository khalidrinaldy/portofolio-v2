import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "../ui/button";
import { LucideChevronLeft, LucideChevronRight, LucideX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../animate-ui/components/radix/dialog";
import { useEffect, useState } from "react";

export function DialogCarousel({
  trigger,
  startIndex,
  data,
}: {
  trigger: React.ReactNode;
  startIndex: number;
  data: string[];
}) {
  const [open, setOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex: startIndex,
  });

  const [selectedSnap, setSelectedSnap] = useState(0);

  const goTo = (index: number) => emblaApi?.scrollTo(index);

  useEffect(() => {
    if (!emblaApi) return;

    const setActiveSnap = (emblaApi: EmblaCarouselType) =>
      setSelectedSnap(emblaApi.selectedScrollSnap);

    // setupSnaps(emblaApi);
    setActiveSnap(emblaApi!);

    // emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const closeDialog = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        transition={{
          type: "spring",
          duration: 0.3,
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
        className="w-auto !max-w-none md:max-w-[90dvw]! p-0 bg-transparent border-transparent ring-transparent gap-12"
      >
        <DialogTitle></DialogTitle>
        <div className="relative embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {Array.from({ length: data.length }).map((_, index) => (
                <Image
                  key={index}
                  src={data[index]}
                  alt={`Slide ${index + 1}`}
                  width={1600}
                  height={1200}
                  className="embla__slide object-contain w-full rounded-lg"
                />
              ))}
            </div>
          </div>

          {/*Index*/}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-neutral-950! rounded-lg border">
            <p className="font-semibold text-body-4 md:text-body-3">
              <span className="text-dark-grey">{selectedSnap + 1}</span> /{" "}
              {data.length}
            </p>
          </div>

          {/*Close Buttons*/}
          <Button
            onClick={closeDialog}
            variant={"outline"}
            className="absolute -top-20 -right-15 p-2 h-auto rounded-lg bg-neutral-950! hover:bg-neutral-800! hover:cursor-pointer"
          >
            <LucideX className="md:h-6! md:w-6! h-4! h-4" />
          </Button>

          <Button
            onClick={goToPrev}
            variant={"outline"}
            className="absolute -left-20 top-1/2 -translate-y-1/2 p-3 h-auto rounded-xl bg-neutral-950! hover:bg-neutral-800! hover:cursor-pointer"
          >
            <LucideChevronLeft className="md:h-8! md:w-8! h-4! h-4" />
          </Button>
          <Button
            onClick={goToNext}
            variant={"outline"}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-120 p-3 h-auto rounded-xl bg-neutral-950! hover:bg-neutral-800! hover:cursor-pointer"
          >
            <LucideChevronRight className="md:h-8! md:w-8! h-4! h-4" />
          </Button>
        </div>

        {/*Thumnails*/}
        <div className="grid grid-cols-3 lg:flex lg:flex-wrap lg:flex-row justify-center items-center gap-2 lg:gap-8">
          {Array.from({ length: data.length }).map((_, index) => (
            <Image
              onClick={() => goTo(index)}
              key={index}
              src={data[index]}
              alt={`Slide ${index + 1}`}
              width={100}
              height={100}
              className={`object-contain w-auto max-h-10 md:max-h-15 rounded-lg hover:cursor-pointer ${index === selectedSnap ? "border-2 border-blue-500" : ""}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
