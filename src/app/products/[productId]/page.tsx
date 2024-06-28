import { Metadata } from 'next'
type ProductType = {
    params: {
        productId: string
    }
}

export const generateMetadata = async({ params}: ProductType): Promise<Metadata> => {
    const title: string = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product is ${params.productId}`)
        }, 1000)
    
    })

    return {
        title,
        description: `Product ${params.productId} description`,
        keywords: ['Product', 'Description', params.productId]
    }
}

export default function Product({ params }: ProductType) {

    return (
        <div>
            <h1>Welcome Home {params.productId}</h1>
        </div>
    )
}