import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
            <h1>Welcome Home</h1>
        </div>
    )
}