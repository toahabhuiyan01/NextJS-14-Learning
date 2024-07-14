import { comments } from '../data'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const comment = comments.find(comment => comment.id === +params.id)
    return new Response(
        JSON.stringify(comment),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        }
    )
}