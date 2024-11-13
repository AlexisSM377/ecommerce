import ProductBrandGender from "@/components/shared/product-brand-gerder"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-card"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { toast } from "@/hooks/use-toast"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Heart } from "lucide-react"
import { useState } from "react"

export type InfoProductProps = {
    product: ProductType
}

interface Size {
    size: string;
    enabled: boolean;
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const { addItem } = useCart()
    const { addLoveItem } = useLovedProducts()
    const [selectedSize, setSelectedSize] = useState<string | null>(null)

    const handleSizeClick = (size: Size) => {
        if (size.enabled) {
            setSelectedSize(size.size);
        }
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addItem({ ...product, selectedSize });
        } else {
            toast({
                title: "Por favor selecciona una talla 👟",
                variant: "destructive"
            })
        }
    };

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl block mt-3">{product.productName}</h1>
            </div>
            <ProductBrandGender nameBrand={product.brand.nameBrand} gender={product.gender} />
            <Separator className="my-4" />
            <p className="text-base block text-justify">{product.description}</p>
            <div className="grid grid-cols-3 gap-2 my-4">
                {product.size.data.map((size) => (
                    <div
                        key={size.size}
                        onClick={() => handleSizeClick(size)}
                        className={`border rounded-md text-center py-3 font-medium ${size.enabled ? "dark:hover:border-white cursor-pointer hover:border-black" : "cursor-not-allowed bg-black/[0.1] opacity-50"} ${selectedSize === size.size ? "border-2 border-blue-500" : ""}`}
                    >
                        {size.size}
                    </div>
                ))}
            </div>
            <Separator className="my-4" />
            <p className="my-4 text-xl font-bold">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={handleAddToCart}>Agregar a la bolsa de compra</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" onClick={() => addLoveItem(product)} />

            </div>
        </div>
    )
}

export default InfoProduct