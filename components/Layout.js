import Navigation from "@/components/navigation";


export default function Layout({ children }) {
    return (
        <div className={'bg-social-dark h-screen w-full select-none md:static relative'}>
            <div className={'md:max-w-3xl mx-auto overflow-auto h-screen md:flex'}>
                <div className={'w-full bg-social-card md:bg-transparent md:w-4/12 md:mb-0 md:p-2 z-10 md:z-0 absolute bottom-0 md:static'}>
                    <Navigation />
                </div>
                <div className={'h-auto mb-14 md:mb-0 md:w-10/12 p-2 flex flex-col gap-2 overflow-auto scrollbar-hide'}>
                    {children}
                </div>
            </div>
        </div>
    )
}