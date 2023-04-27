export default function Card({ children }) {
    return (
        <div className={'bg-social-card p-2 rounded-md shadow-xl w-full'}>
            {children}
        </div>
    )
}