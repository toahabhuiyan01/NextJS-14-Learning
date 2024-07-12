import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'This is about page'
    }
}

export default function Home() {
    return (
        <div>
            <h1>Welcome About</h1>
        </div>
    )
}