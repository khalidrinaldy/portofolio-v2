import { unstable_cache } from "next/cache";
import { db } from "./db";

const REVALIDATE_DURATION = 5;

// Get all work experiences from the database, ordered by start date, with company and points included
export const getWorkExperiences = unstable_cache(
  async () =>
    db.workExperience.findMany({
      orderBy: {
        // start_date: "desc",
        end_date: "desc",
      },
      include: {
        company: true,
        points: {
          orderBy: {
            id: "desc",
          },
        },
      },
    }),
  ["work-experiences"],
  {
    revalidate: REVALIDATE_DURATION,
  },
);

// Get all projects from the database, ordered by start date, with company and points included
export const getProjects = unstable_cache(
  async () =>
    db.project.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        company: true,
        projectPoints: true,
        projectGalleries: {
          orderBy: {
            id: "desc",
          },
        },
      },
    }),
  ["projects"],
  {
    revalidate: REVALIDATE_DURATION,
  },
);

// get all skills
export const getSkills = unstable_cache(
  async () => db.skill.findMany(),
  ["skills"],
  {
    revalidate: REVALIDATE_DURATION,
  },
);

// get educations
export const getEducations = unstable_cache(
  async () => db.education.findMany(),
  ["educations"],
  {
    revalidate: REVALIDATE_DURATION,
  },
);
