import Image from "next/image";

export default function Img() {
    return (
        <div className="h-full w-full rounded-md overflow-hidden relative">
            <Image src={'/post.jpg'} fill alt={'post'} className={'object-cover'} />
        </div>
    )
}