"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Education, Project, Skill, WorkExperience } from "@/lib/types";

const tabs = [
  { value: "experiences", label: "Work Experience" },
  { value: "projects", label: "Projects" },
  { value: "skills", label: "Skills" },
  { value: "education", label: "Education" },
];

interface props {
  workExperiences: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  educations: Education[];
}

export default function ContentTabsSection() {
  const [active, setActive] = useState("experiences");

  return (
    <Tabs value={active} onValueChange={setActive} className="w-full">
      <TabsList
        className="w-full flex flex-row justify-between bg-background"
        variant="line"
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="relative">
            {tab.label}
            {active === tab.value && (
              <motion.div
                layoutId="underline"
                className="absolute inset-x-8 bottom-[-5px] h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
