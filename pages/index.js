import Layout from "@/components/Layout";
import {Share} from "@/components/share";
import Post from "@/components/post";
import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>Social - mini app for you!</title>
                <meta name="description" content="Social Mini" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*Not working*/}<link rel="icon" href="/social.ico" />
            </Head>
            <Layout>
                <Share/>
                <Post/>
                <Post/>
            </Layout>
        </>
    )
}
