'use client'

import ServerSideUtil from '@/utils/server-utils'

export default function ClientRoutePage() {
    const result = ServerSideUtil()
    return (
        <div>
            <h1>Client Route Page</h1>
            <p>Value: {result}</p>
        </div>
    )
}