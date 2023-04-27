import Link from "next/link";

export default function Login() {
    return (
        <div className={'bg-neutral-900 h-screen w-full grid place-items-center'}>
            <div>
                <Link href={'/'} className={'py-3 px-4 bg-social-card text-social-primary rounded-full shadow-xl'}>
                    Login with Google
                </Link>
            </div>
        </div>
    )
}