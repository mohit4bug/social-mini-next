import Avatar from "@/components/avatar";

export default function Friend(){
    return (
        <div className={'flex items-center gap-2 pb-2'}>
            <Avatar/>
            <div>
                <h1 className={'font-semibold text-social-primary'}>Chat GPT 4</h1>
                <p className={'text-social-secondary text-sm'}>1 mutual friend</p>
            </div>
        </div>
    )
}