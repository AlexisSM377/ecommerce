/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/use-card"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt="Product Image"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold text-gray-500 dark:text-gray-400">{formatPrice(product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm px-2 py-1 text-white bg-black rounded-xl font-medium dark:bg-white dark:text-black w-fit">
                            {product.brand.nameBrand}
                        </p>
                        <p className="text-sm px-2 py-1 text-white bg-yellow-900 rounded-xl w-fit font-medium">
                            {product.gender}
                        </p>
                    </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id)} className="dark:text-black" />

                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem