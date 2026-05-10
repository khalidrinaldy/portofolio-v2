import Image from "next/image";
import { LucideCalendarDays, LucideMail, LucideMapPin } from "lucide-react";
import { ElementType, ReactNode } from "react";
import Link from "next/link";

const MAIL_URL =
  "mailto:alid.rinaldy@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20by%20your%20work.%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you%21%0A%0ABest%20regards%2C";
const LINKEDIN_URL = "https://www.linkedin.com/in/khalid-rinaldy-4027b1112/";
const GITHUB_URL = "https://github.com/khalidrinaldy";

export default function ProfileInfoSection() {
  return (
    <div className="flex flex-col gap-5 justify-center items-stretch">
      {/* Banner Image */}
      <div className="relative w-full">
        <Image
          src="/images/img-beach-night.avif"
          className="w-full h-55 object-cover object-[center_40%]"
          alt="Profile"
          width={100}
          height={100}
        />

        {/* Profile Image */}
        <div className="absolute h-32 w-32 bottom-[-20%] ml-5 rounded-full bg-red-500 border-4 border-background shadow-2xl">
          <Image
            src="/images/img-profile.png"
            className="w-full h-full rounded-full object-cover object-[center_65%]"
            alt="Profile"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-stretch px-4">
        {/*Social Media Icons*/}
        <div className="mt-1 w-full flex flex-row gap-3 justify-end items-center">
          <SocialMediaItem
            url={MAIL_URL}
            icon={<LucideMail className="h-5 w-5" />}
          />
          <SocialMediaItem
            url={LINKEDIN_URL}
            icon={
              <Image
                src="/icons/ic_linkedin.svg"
                className="h-5 w-5"
                alt="linkedin"
                width={100}
                height={100}
              />
            }
          />
          <SocialMediaItem
            url={GITHUB_URL}
            icon={
              <Image
                src="/icons/ic_github.svg"
                className="h-5 w-5"
                alt="linkedin"
                width={100}
                height={100}
              />
            }
          />
        </div>

        {/*Name & Username*/}
        <div className="flex flex-col gap-0.2 items-stretch">
          <div className="flex flex-row gap-1 items-center justify-start">
            <p className="text-heading-3 font-bold ">Khalid Rinaldy</p>
            <Image
              src="/icons/ic_verified.svg"
              className="h-4 w-4"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p className="text-heading-5 text-grey">@khalidrinaldy</p>
        </div>

        {/*Description*/}
        <p className="text-body-1 text-light-grey">
          Results-driven Frontend Developer with 4 years of experience building
          cross-platform mobile applications and modern web interfaces.
          Proficient in Flutter for mobile development and Next.js for scalable,
          performant web applications. Passionate about delivering clean,
          user-friendly experiences across platforms.
        </p>

        {/*Work Location*/}
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-1 items-center">
            <LucideMapPin className="w-4 h-4" />
            <p className="text-body-1 text-light-grey">Jakarta, Indonesia</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <LucideCalendarDays className="w-4 h-4" />
            <p className="text-body-1 text-light-grey">
              Working since February 2022
            </p>
          </div>
        </div>

        {/*Projects*/}
        <div className="flex flex-row gap-4 items-center">
          <p className="text-body-1 text-light-grey">
            <span className="text-white font-semibold">4+</span> Years of
            Experience
          </p>
          <p className="text-body-1 text-light-grey">
            <span className="text-white font-semibold">7+</span> Projects
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialMediaItem({ url, icon }: { url: string; icon: ReactNode }) {
  return (
    <Link href={url} target="_blank">
      <div className="p-2 w-auto h-auto rounded-full border-1 border-light-grey text-light-grey">
        {icon}
      </div>
    </Link>
  );
}
