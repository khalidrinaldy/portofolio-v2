import { Skill } from "@/lib/types";
import { LucideMonitorSmartphone, LucideSmartphone } from "lucide-react";

export default function SkillContent({ skills }: { skills: Skill[] }) {
  return (
    <div className="p-6 flex flex-col gap-6 overflow-y-auto">
      {skills.map((skill, index) => (
        <SkillItem key={index} data={skill} />
      ))}
    </div>
  );
}

function SkillItem({ data }: { data: Skill }) {
  return (
    <div className="flex flex-col gap-6">
      {/*name*/}
      <div className="flex flex-row gap-2 items-center">
        {data.code === "mobile" ? (
          <LucideSmartphone className="h-5 text-primary" />
        ) : (
          <LucideMonitorSmartphone className="h-5 text-primary" />
        )}
        <p className="text-heading-5 font-bold text-white">{data.name}</p>
      </div>

      {/*Skills*/}
      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-3 flex flex-row gap-3 items-center bg-[#1B1B1B] border-1 border-[#474747]/10 rounded-full"
          >
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <p className="text-heading-6 font-medium text-white">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
