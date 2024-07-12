import Link from 'next/link'

export default function F4Page() {
    return (
        <div>
            <h1>F4 Page</h1>
            <Link href="/f1/f3">goto F3</Link>
            <Link href="/dashboard">goto Dashboard</Link>
        </div>
    )
}