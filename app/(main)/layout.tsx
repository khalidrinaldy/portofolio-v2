export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen w-full md:w-[50%] mx-auto">
            {children}
        </div>
    )
}