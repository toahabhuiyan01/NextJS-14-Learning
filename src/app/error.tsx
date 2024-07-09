"use client"

type ErrorType = {
    error: Error
    reset: () => void
}
export default function Error({ error, reset }: ErrorType) {
    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={reset}>
                Refresh
            </button>
        </div>
    )
}