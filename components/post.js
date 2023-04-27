import Avatar from "@/components/avatar";
import Card from "@/components/Card";
import Link from "next/link";
import Img from "@/components/img";

export default function Post(){
    return (
        <Card>
            <div className="flex flex-col gap-4">
                {/*Top*/}
                <div className="flex items-start gap-4">
                    {/*profile img*/}
                    <div className="">
                        <Avatar size={10}/>
                    </div>
                    {/*post details*/}
                    <div className="text-sm w-full">
                        {/*name album and menu*/}
                        <div className="text-social-primary flex gap-1">
                            <Link href={'/profile/posts'} className={'font-semibold hover:underline'}>Copilot X</Link>
                            <p className={'text-social-primary'}>shared an <span className={'text-social-highlight'}>album</span></p>
                            <span className={'ml-auto cursor-pointer'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </span>
                        </div>
                        {/*time*/}
                        <div className="text-social-secondary">
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                {/*caption */}
                <div className="text-sm text-social-primary">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere iste iusto magni natus perferendis, quas quidem repellat similique voluptate?</p>
                </div>
                {/*Post Image*/}
                <div className={'h-96'}>
                 <Img/>
                </div>

                {/*action bar*/}
                <div className={'flex items-center gap-6 text-social-primary my-2'}>
                  <span className={'flex items-center gap-1 cursor-pointer'}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <p>6.3k</p>
                  </span> <span className={'flex items-center gap-1 cursor-pointer'}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    <p>209</p>
                  </span> <span className={'flex items-center gap-1 cursor-pointer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    <p>3.4k</p>
                  </span>
                </div>
            {/*comment */}
                <div className={'flex gap-2 items-start h-12'}>
                    <div>
                        <Avatar size={10}/>
                    </div>
                    <div className={'grow border border-zinc-500 rounded-md h-full relative flex'}>
                        <textarea className={'w-full bg-transparent outline-none  h-full resize-none p-2 placeholder:text-zinc-500 text-social-primary text-sm'} placeholder={'Leave a comment'}>
                        </textarea>
                            <span className={'p-2 cursor-pointer text-social-secondary'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}