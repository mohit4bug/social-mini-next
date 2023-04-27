import Image from "next/image";

export default function Avatar({ large }) {

    const style = large ? 'h-28 w-28 md:h-36 md:w-36 relative rounded-full overflow-hidden' : 'h-10 w-10 relative rounded-full overflow-hidden'
    return (
        <div className={style}>
            <Image src={'/avatar.jpg'} fill className="object-cover" alt="avatar" />
        </div>
    )
}
