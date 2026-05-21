import { Project } from "@/lib/types";
import { LucideBuilding2 } from "lucide-react";
import { SkillChip } from "../ui/chip";
import { KeyImpact } from "../ui/key-impact";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { DialogCarousel } from "./DialogCarousel";

export default function ProjectContent({ projects }: { projects: Project[] }) {
  return (
    <div className="p-6 flex flex-col gap-6 overflow-y-auto">
      {projects.map((project, index) => (
        <ProjectItem key={index} data={project} />
      ))}
    </div>
  );
}

function ProjectItem({ data }: { data: Project }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        {/*Company & Date*/}
        <div className="flex flex-row gap-2 text-primary items-center">
          <LucideBuilding2 className="h-3 w-4" />
          <p className="text-body-3 text-primary tracking-wide">
            {data.company.name} • {new Date(data.start_date).getFullYear()}-
            {data.end_date != null
              ? new Date(data.end_date)?.getFullYear()
              : "Present"}
          </p>
        </div>

        {/*Project Name*/}
        <p className="text-heading-4 md:text-heading-3 text-white tracking-tight">
          {data.name}
        </p>
      </div>

      {/*Project Points*/}
      <div className="flex flex-col gap-2 px-1">
        {data.projectPoints.map((point, index) => (
          <p key={index} className="text-body-2 md:text-body-1 text-light-grey">
            • {point.description}
          </p>
        ))}
      </div>

      {/*Galleries*/}
      {data.projectGalleries.length > 0 && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full pt-10"
        >
          <p className="absolute top-1 left-0 left-auto translate-y-0 text-body-3 md:text-body-2 text-grey tracking-widest">
            GALLERY{" "}
            <span className="opacity-70">
              • {data.projectGalleries.length} SHOTS
            </span>
          </p>
          <CarouselPrevious className="top-0 right-10 left-auto translate-y-0" />
          <CarouselNext className="top-0 right-0 translate-y-0" />
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                {/* mobile: open image in new tab */}
                <a
                  href={data.projectGalleries.at(index)?.image_url ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block lg:hidden"
                >
                  <Image
                    src={data.projectGalleries.at(index)?.image_url ?? ""}
                    alt=""
                    width={1200}
                    height={1200}
                    className="w-full h-50 aspect-video object-fit rounded-sm"
                  />
                </a>

                {/* desktop: open dialog carousel */}
                <div className="hidden lg:block">
                  <DialogCarousel
                    startIndex={index}
                    trigger={
                      <Image
                        src={data.projectGalleries.at(index)?.image_url ?? ""}
                        alt=""
                        width={1600}
                        height={1600}
                        className="w-full h-50 aspect-video object-fit rounded-sm"
                      />
                    }
                    data={data.projectGalleries.map((item) => item.image_url)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      {/*Skills*/}
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill, index) => (
          <SkillChip key={index} label={skill} />
        ))}
      </div>

      {/*Key Impact*/}
      {data.key_impact && (
        <div className="flex flex-row gap-4">
          <KeyImpact label={data.key_impact ?? ""} />
        </div>
      )}
    </div>
  );
}
