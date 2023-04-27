export default function Title({children}){
    return (
        <div>
            <h1 className={'text-5xl font-semibold text-social-secondary py-4'}>
                {children}
            </h1>
        </div>
    )
}