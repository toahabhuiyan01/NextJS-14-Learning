import Product from '@/components/product'
import Reviews from '@/components/reviews'
import { Suspense } from 'react'

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>

            <Suspense fallback='loading Product...'>
                <Product />
            </Suspense>

            <Suspense fallback='Loading Reviews...'>
                <Reviews />
            </Suspense>
        </div>
    )
}