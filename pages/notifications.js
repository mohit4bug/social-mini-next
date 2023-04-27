import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Avatar from "@/components/avatar";
import Link from "next/link";


function Notification({children}){
    return (
        <div className={'flex items-center text-sm gap-1 text-social-primary py-4'}>
            <Avatar/>
            <Link href={'/profile/posts'} className={'ml-1 font-semibold hover:underline cursor-pointer'}>Copilot X</Link>
            <p>liked your{' '}<span className={'text-social-highlight'}>your photo</span></p>
        </div>
    )
}
export default function Notifications(){
    return (
        <Layout>
            <Title>
                Notifications
            </Title>
            <Card>
                <Notification/>
                <Notification/>
                <Notification/>
            </Card>
        </Layout>
    )
}