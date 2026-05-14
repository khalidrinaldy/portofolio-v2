export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full md:w-[80%] lg:w-[55%] mx-auto">
      {children}
    </div>
  );
}
