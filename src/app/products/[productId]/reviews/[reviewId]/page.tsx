import { notFound } from "next/navigation"
type ReviewType = {
    params: {
        reviewId: string
        productId: string
    }
}
export default function ReviewDetails({ params }: ReviewType) {
    if(parseInt(params.reviewId) > 1000) {
        return notFound()
    }
    return (
        <div>
            <h1>Review {params.reviewId} of product {params.productId}</h1>
        </div>
    )
}