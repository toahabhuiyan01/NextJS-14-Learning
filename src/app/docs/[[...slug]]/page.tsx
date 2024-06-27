
type DocsType = {
    params: {
        slug: string[]
    }
}

export default function Docs({ params }: DocsType) {
    console.log(params.slug)
    return (
        <h1>Docs Page</h1>
    )
}