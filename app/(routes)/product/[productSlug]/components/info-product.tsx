import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Heart } from "lucide-react"

export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    // const [selectedSize, setSelectedSize] = useState(null) para seleccionar la talla, pero no se usa en el proyecto

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl block">{product.productName}</h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.brand.nameBrand}
                    </p>
                    <p className="px-2 py-1 text-xs bg-yellow-900 rounded-full w-fit text-white">
                        {product.category.categoryName}
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <p className="text-base block">{product.description}</p>
            <div className="grid grid-cols-3 gap-2 my-4">
                {product.size.data.map((size) => (
                    <div key={size.size} className={`border rounded-md text-center py-3 font-medium ${size.enabled ? "dark:hover:border-white cursor-pointer hover:border-black" : "cursor-not-allowed bg-black/[0.1] opacity-50"}`}>
                        {size.size}
                    </div>
                ))}
            </div>
            <Separator className="my-4" />
            <p className="my-4 text-xl font-bold">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => console.log("Comprar")}>Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" onClick={() => console.log("Add to loved produts")} />

            </div>
        </div>
    )
}

export default InfoProduct