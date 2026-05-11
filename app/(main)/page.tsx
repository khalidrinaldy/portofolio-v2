import ContentTabsSection from "@/components/sections/ContentTabsSection";
import ProfileInfoSection from "@/components/sections/ProfileInfoSection";
import {
  getEducations,
  getProjects,
  getSkills,
  getWorkExperiences,
} from "@/lib/data";

export default async function HomePage() {
  const [workExperiences, projects, skills, educations] = await Promise.all([
    getWorkExperiences(),
    getProjects(),
    getSkills(),
    getEducations(),
  ]);

  return (
    <main className="flex flex-col gap-4 items-stretch w-full">
      <ProfileInfoSection />
      <ContentTabsSection
        workExperiences={workExperiences}
        projects={projects}
        skills={skills}
        educations={educations}
      />
    </main>
  );
}
