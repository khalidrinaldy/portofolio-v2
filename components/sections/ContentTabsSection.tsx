"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Education, Project, Skill, WorkExperience } from "@/lib/types";
import WorkExperienceContent from "./WorkExperienceContent";
import ProjectContent from "./ProjectContent";
import SkillContent from "./SkillContent";
import EducationContent from "./EducationContent";

const tabs = [
  { value: "experiences", label: "Experiences" },
  { value: "projects", label: "Projects" },
  { value: "skills", label: "Skills" },
  { value: "educations", label: "Education" },
];

interface props {
  workExperiences: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  educations: Education[];
}

export default function ContentTabsSection({
  workExperiences,
  projects,
  skills,
  educations,
}: props) {
  const [active, setActive] = useState("experiences");

  return (
    <Tabs value={active} onValueChange={setActive} className="w-full">
      <TabsList
        className="w-full flex flex-row justify-between bg-background overflow-x-auto"
        variant="line"
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="relative">
            {tab.label}
            {active === tab.value && (
              <motion.div
                layoutId="underline"
                className="absolute inset-x-4 bottom-[-5px] h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="experiences">
        <WorkExperienceContent workExperiences={workExperiences} />
      </TabsContent>

      <TabsContent value="projects">
        <ProjectContent projects={projects} />
      </TabsContent>

      <TabsContent value="skills">
        <SkillContent skills={skills} />
      </TabsContent>

      <TabsContent value="educations">
        <EducationContent educations={educations} />
      </TabsContent>
    </Tabs>
  );
}
