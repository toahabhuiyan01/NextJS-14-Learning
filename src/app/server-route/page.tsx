import ServerSideUtil from '@/utils/server-utils'

export default function Page() {
    const serverValue = ServerSideUtil()
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>Server Value: {serverValue}</p>
        </div>
    )
}