/* eslint-disable @next/next/no-img-element */
import ProductImageMiniature from "@/components/shared/image-product"
import ProductBrandGender from "@/components/shared/product-brand-gerder"
import { useCart } from "@/hooks/use-card"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {

    const { product } = props
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <ProductImageMiniature slug={product.slug} url={product.images[0].url} />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold text-gray-500 dark:text-gray-400">{formatPrice(product.price)}</p>

                    <ProductBrandGender nameBrand={product.brand.nameBrand} gender={product.gender} />
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