/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import IconButton from "../icon-button"
import { useRouter } from "next/navigation"
import { Expand, ShoppingCart } from "lucide-react"
type CarouselProductProps = {
    product: ProductType
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { product } = props
    const router = useRouter()
    return (
        <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
                {product.images.map((image) => (

                    <CarouselItem key={image.id}>
                        <img src={`${image.url}`} alt="Product Image" className="rounded-lg w-auto" />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                                <IconButton onclick={() => router.push(`/product/${product.slug})`)}
                                    icon={
                                        <Expand size={20} className="text-gray-600" />
                                    }
                                />
                                <IconButton onclick={() => console.log("Agregar Item")}
                                    icon={
                                        <ShoppingCart size={20} className="text-gray-600" />
                                    }
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CarouselProduct