export interface Company {
  id: number;
  name: string;
  url: string;
  logo: string;
  // workExperiences: WorkExperience[];
  // projects: Project[];
}

export interface WorkExperience {
  id: number;
  company_id: number;
  position_name: string;
  start_date: Date;
  end_date: Date | null;
  points: WorkExperiencePoint[];
  skills: string[];
  company: Company;
}

export interface WorkExperiencePoint {
  id: number;
  work_experience_id: number;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  company_id: number;
  start_date: Date;
  end_date: Date | null;
  skills: string[];
  projectPoints: ProjectPoint[];
  projectGalleries: ProjectGallery[];
  key_impact: string | null;
  company: Company;
}

export interface ProjectPoint {
  id: number;
  project_id: number;
  description: string;
}

export interface Education {
  id: number;
  start_year: number;
  end_year: number | null;
  degree: string;
  university: string;
  university_logo: string;
  description: string;
  gpa: number;
  max_gpa: number;
  courseworks: string[];
}

export interface Skill {
  id: number;
  code: string;
  name: string;
  skills: string[];
}

export interface ProjectGallery {
  id: number;
  project_id: number;
  image_url: string;
  type: ScreenType | null;
}
export type ScreenType = "DESKTOP" | "MOBILE";
