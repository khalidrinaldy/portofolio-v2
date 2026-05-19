import { Education } from "@/lib/types";
import { LucideGraduationCap } from "lucide-react";
import Image from "next/image";
import { SkillChip } from "../ui/chip";

export default function EducationContent({
  educations,
}: {
  educations: Education[];
}) {
  return (
    <div className="p-6 flex flex-col gap-6 overflow-y-auto">
      {educations.map((education, index) => (
        <EducationItem key={index} data={education} />
      ))}
    </div>
  );
}

function EducationItem({ data }: { data: Education }) {
  return (
    <div className="p-6 flex flex-row gap-4 bg-[#1B1B1B] rounded-xl">
      <Image
        src={data.university_logo}
        alt={data.university}
        height={100}
        width={100}
        className="w-12 h-12 rounded-full bg-white p-2 object-contain"
      />

      <div className="flex-1 flex flex-col gap-4 items-stretch">
        {/*Main Info*/}
        <div className="flex flex-row justify-between">
          <div className="flex-1 flex flex-col items-start">
            <p className="text-heading-5 text-white">{data.university}</p>
            <p className="text-heading-6 text-light-grey">{data.degree}</p>
          </div>
          <p className="text-body-2 text-grey">{`${data.start_year} - ${data.end_year}`}</p>
        </div>

        {/*Detail*/}
        <div className="flex flex-col gap-3 items-stretch">
          <div className="flex flex-row gap-2">
            <LucideGraduationCap className="h-5 w-5 text-primary" />
            <p className="flex-1 text-body-2 text-grey">{data.description}</p>
          </div>
          <div className="p-4 rounded-full bg-[#0E0E0E] border-1 border-[#474747]/10 flex flex-col gap-1">
            <p className="text-body-4 text-primary">GPA</p>
            <p className="text-heading-6 text-white">{`${data.gpa.toFixed(2)}/${data.max_gpa.toFixed(2)}`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-3 text-grey tracking-wide">
              KEY COURSEWORK
            </p>
            <div className="flex flex-wrap gap-2">
              {data.courseworks.map((item, index) => (
                <SkillChip key={index} label={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
