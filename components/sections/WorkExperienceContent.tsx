import { WorkExperience } from "@/lib/types";
import Image from "next/image";

export default function WorkExperienceContent({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  return (
    <div className="p-6 flex flex-col gap-6 overflow-y-auto">
      {workExperiences.map((workExperience, index) => (
        <WorkExperienceItem key={index} data={workExperience} />
      ))}
    </div>
  );
}

function WorkExperienceItem({ data }: { data: WorkExperience }) {
  return (
    <div className="flex flex-row gap-4">
      <Image src={data.company.logo} alt={data.company.name} />
    </div>
  );
}
