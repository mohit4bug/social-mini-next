import Layout from "@/components/Layout";
import Post from "@/components/post";
import Title from "@/components/Title";

export default function Saved(){
    return (
        <Layout>
            <Title>
                Saved posts
            </Title>
            <Post/>
            <Post/>
            <Post/>
        </Layout>
    )
}