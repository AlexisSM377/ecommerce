/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation"

interface ProductImageProps {
    slug: string
    url: string
}
const ProductImageMiniature = (props: ProductImageProps) => {
    const { slug, url } = props
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
            <img
                src={`${url}`}
                alt="Product Image"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
        </div>
    )
}

export default ProductImageMiniature