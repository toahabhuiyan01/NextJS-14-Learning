import { comments } from './data'

export async function GET() {
    return Response.json(comments)
}

export async function POST(request: Request) {
    const body = await request.json()
    comments.push(body)
    return new Response(
        JSON.stringify(body),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 201
        }
    )
}