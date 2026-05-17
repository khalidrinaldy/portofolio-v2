import Image from "next/image";

export function KeyImpact({ label }: { label: string }) {
  return (
    <div className="p-4 flex flex-row gap-3 bg-[#1B1B1B] w-full rounded-full">
      <Image
        src={"/icons/ic_lightning.svg"}
        alt={label}
        height={100}
        width={100}
        className="w-10 h-10"
      />

      <div className="flex flex-col items-stretch">
        <p className="text-body-3 text-grey">Key Impact</p>
        <p className="text-body-2 text-white">{label}</p>
      </div>
    </div>
  );
}
