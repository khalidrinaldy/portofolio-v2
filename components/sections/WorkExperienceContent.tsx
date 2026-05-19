import { WorkExperience } from "@/lib/types";
import Image from "next/image";
import { format } from "date-fns";
import { getDifferenceDate } from "@/lib/utils";
import Link from "next/link";
import { LucideExternalLink } from "lucide-react";
import { SkillChip } from "../ui/chip";

export default function WorkExperienceContent({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  return (
    <div className="p-6 flex flex-col gap-6 overflow-y-auto overflow-x-hidden items-stretch">
      {workExperiences.map((workExperience, index) => (
        <WorkExperienceItem key={index} data={workExperience} />
      ))}
    </div>
  );
}

function WorkExperienceItem({ data }: { data: WorkExperience }) {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src={data.company.logo}
        alt={data.company.name}
        height={100}
        width={100}
        className="md:w-12 md:h-12 w-10 h-10 rounded-full bg-white p-2 object-contain"
      />

      <div className="flex-1 min-w-0 flex flex-col gap-3 items-stretch">
        {/*company info*/}
        <div className="flex flex-col gap-1 items-start">
          <p className="text-heading-6 md:text-heading-5 text-white font-semibold">
            {data.position_name}
          </p>
          <Link
            href={data.company.url}
            target="_blank"
            className="flex flex-row gap-4 items-center group"
          >
            <p className="text-body-2 md:text-body-1 text-primary">
              {data.company.name}
            </p>
            <LucideExternalLink className="w-4! h-4! text-primary opacity-0 group-hover:opacity-100 transition-all duration-400" />
          </Link>
          <p className="text-body-3 md:text-body-2 text-grey">
            {format(data.start_date, "MMM yyyy")} —{" "}
            {data.end_date == null
              ? "Present"
              : format(data.end_date, "MMM yyyy")}{" "}
            •{" "}
            {getDifferenceDate(
              new Date(data.start_date),
              data.end_date == null ? new Date() : new Date(data.end_date),
            )}
          </p>
        </div>

        {/*experience points*/}
        <div className="flex flex-col gap-1.5 items-stretch">
          {data.points.map((point, index) => (
            <p
              key={index}
              className=" text-body-2 md:text-body-1 text-light-grey text-wrap"
            >
              • {point.description}
            </p>
          ))}
        </div>

        {/*Skills*/}
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <SkillChip key={index} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
