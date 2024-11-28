/* eslint-disable @next/next/no-img-element */
"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { ResponseType } from "@/types/response"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import SkeletonShema from "./skeletonSchema"
import { ProductType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import { Expand, ShoppingCart } from "lucide-react"

import IconButton from "./icon-button"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-card"
import { formatPrice } from "@/lib/formatPrice"


const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    const { addItem } = useCart()

    return (
        <div className="mx-auto sm:max-w-4xl md:max-w-6xl mt-6 px-4  lg:px-8 py-28 sm:py-28 sm:px-6">
            <h3 className="text-3xl sm:pb-6 font-bold">CLÁSICOS EN TENDENCIA</h3>
            <Carousel>
                <CarouselContent className="">
                    {loading && (
                        <SkeletonShema grid={3} />
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {
                            const { id } = product
                            const { slug, images, productName, brand, gender } = product
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group" >
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none" >
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img src={`${images[0].url}`} alt="Image featured" className="rounded-sm w-auto h-72" />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton onclick={() => router.push(`product/${slug}`)} icon={<Expand size={20} />} className="text-gray-900" />
                                                        <IconButton onclick={() => addItem(product)} icon={<ShoppingCart size={20} />} className="text-gray-900" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="gap-4 px-8">
                                                <h3 className="text-sm font-semibold truncate">
                                                    {productName}
                                                </h3>
                                                <p className="font-bold dark:text-zinc-400">{formatPrice(product.price)}</p>
                                                <div className="flex gap-2 mt-2">
                                                    <p className="text-xs font-semibold px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{brand.nameBrand}</p>
                                                    <p className="text-xs font-semibold px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">{gender}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )

                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

        </div>
    )
}

export default FeaturedProducts