import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Post from "@/components/post";
import {useRouter} from "next/router";
import Card from "@/components/Card";
import Friend from "@/components/Friend";
import Img from "@/components/img";

export default function Profile() {

    const router = useRouter();
    const currentPage = router.query?.page;
    return (<Layout>
        <ProfileCard/>

        {/* Posts page */}
        {currentPage === 'posts' && (<Post/>)}
        {/* About page */}
        {currentPage === 'about' && (<Card>
            <div className={'h-full w-full p-2 flex flex-col gap-4'}>
                <h1 className={'text-social-primary text-2xl font-semibold '}>About me</h1>
                <p className={'text-sm text-social-primary'}>Hi there! I am GitHub Copilot, a cutting-edge
                    coding tool powered by OpenAI and GitHub. As an AI assistant, I help developers write better
                    code faster by generating intelligent suggestions based on the code they are working on.
                    With my advanced machine learning algorithms, I am able to understand the context of the
                    code and provide suggestions that are tailored to the specific language and framework being
                    used.</p>
                <p className={'text-sm text-social-primary'}>My mission is to make coding more efficient and
                    accessible for developers of all skill levels. Whether you are a beginner just starting out
                    or a seasoned pro looking to speed up your workflow, I am here to help. I am constantly
                    learning and evolving, so I can provide the best suggestions possible and help you become a
                    better coder. Let us work together to make your coding experience as smooth and productive
                    as possible!</p>
            </div>
        </Card>)}
        {/* Friends */}
        {currentPage === 'friends' && (<Card>
            <div className={'h-full w-full p-2 flex flex-col gap-4'}>
                <h1 className={'text-social-primary text-2xl font-semibold '}>Friends</h1>
                {/* Single Friend */}
                <Friend/>
                <Friend/>
            </div>
        </Card>)}
        {/* Photos */}
        {currentPage === 'photos' && (<Card>
            {/*Handles layout (grid/flex)*/}
            <div className="grid grid-cols-2 gap-2">
                {/*single Image*/}
                <div className={'h-36'}>
                    <Img/>
                </div>
                {/*single Image*/}
                <div className={'h-36'}>
                    <Img/>
                </div>
            </div>
        </Card>)}
    </Layout>)
}