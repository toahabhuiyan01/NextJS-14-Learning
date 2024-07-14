import delay from '@/utils/delay'

export default async function Product() {
    await delay(4000)
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}