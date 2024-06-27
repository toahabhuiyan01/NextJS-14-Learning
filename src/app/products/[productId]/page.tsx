
type ProductType = {
    params: {
        productId: string
    }
}
export default function Product({ params }: ProductType) {

    return (
        <div>
            <h1>Welcome Home {params.productId}</h1>
        </div>
    )
}