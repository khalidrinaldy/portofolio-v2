import ContentTabsSection from "@/components/sections/ContentTabsSection";
import ProfileInfoSection from "@/components/sections/ProfileInfoSection";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 items-stretch w-full">
      <ProfileInfoSection />
      <ContentTabsSection />
    </main>
  );
}
