export function SkillChip({ label }: { label: string }) {
  return (
    <div className="bg-[#2A2A2A] rounded-full px-3 py-1 text-body-3 md:text-body-2 text-grey">
      {label}
    </div>
  );
}
