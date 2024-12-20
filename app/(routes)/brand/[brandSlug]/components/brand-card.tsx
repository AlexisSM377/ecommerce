/* eslint-disable @next/next/no-img-element */
import IconButton from "@/components/icon-button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Expand, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type BrandCardProps = {
    product: ProductType
}

const BrandCard = (props: BrandCardProps) => {

    const { product } = props
    const router = useRouter()

    return (
        <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit font-medium">{product.category.categoryName}</p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit font-medium">{product.gender}</p>
                <p className="px-2 py-1 text-xs text-white bg-slate-900 rounded-full w-fit font-medium">{product.color}</p>
            </div>

            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img src={`${image.url}`} alt="Product Image" className="rounded-md w-auto" />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onclick={() => router.push(`/product/${product.slug})`)}
                                        icon={
                                            <Expand size={20} className="text-gray-900" />
                                        }
                                    />
                                    <IconButton onclick={() => console.log("Agregar Item")}
                                        icon={
                                            <ShoppingCart size={20} className="text-gray-900" />
                                        }
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="mt-3">
                <p className="text-sm font-semibold text-center">{product.productName}</p>
                <p className="font-bold text-center">{formatPrice(product.price)}</p>
            </div>

        </Link>

    )
}

export default BrandCard