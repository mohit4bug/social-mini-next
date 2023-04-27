import Img from "@/components/img";
import Avatar from "@/components/avatar";
import Card from "@/components/Card";
import Link from "next/link";
import {useRouter} from "next/router";

export default function ProfileCard(){

    const router = useRouter();
    const currentPage = router.query.page;
    const active = 'flex text-sm items-center gap-1  py-1 border-b-2 text-social-highlight border-blue-500'
    const inActive = 'flex text-sm items-center gap-1  py-1 text-social-primary border-b-2 border-transparent'

    return (
        <Card>
            {/*Image*/}
            <div className={'h-36 -mx-2 -mt-2'}>
                <Img/>
            </div>
            {/*Details*/}
            <div className={'relative h-24'}>
                <div className={'absolute -top-16 left-2 rounded-full'}>
                    <Avatar large={true}/>
                </div>
                <div className={'ml-32 md:ml-40 mt-4'}>
                    <h1 className={'text-xl md:text-3xl font-semibold text-social-primary'}>Github Copilot</h1>
                    <p className={'text-sm text-social-secondary'}>San Francisco, California, United States.</p>
                </div>
            </div>
            {/*Profile Navigation*/}
            <div className={'flex items-end gap-6 -mb-2'}>
                        <Link href={'/profile/posts'} className={currentPage ==='posts' ? active : inActive}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                            <p>Posts</p>
                        </Link>
                        <Link href={'/profile/about'} className={currentPage ==='about' ? active : inActive}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <p>About</p>
                        </Link>
                <Link href={'/profile/friends'} className={currentPage ==='friends' ? active : inActive}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <p>Friends</p>
                        </Link>
                <Link href={'/profile/photos'} className={currentPage ==='photos' ? active : inActive}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            <p>Photos</p>
                        </Link>
            </div>
        </Card>
    )
}