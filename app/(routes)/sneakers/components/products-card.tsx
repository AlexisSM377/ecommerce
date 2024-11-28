/* eslint-disable @next/next/no-img-element */

import CarouselProduct from "@/components/shared/carousel-product";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import Link from "next/link";


type ProductsCardProps = {
    product: ProductType
}

const ProductsCard = (props: ProductsCardProps) => {

    const { product } = props
    return (
        <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-orange-500 rounded-full w-fit font-medium">{product.brand.nameBrand}</p>
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit font-medium">{product.category.categoryName}</p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit font-medium">{product.gender}</p>
            </div>
            <CarouselProduct product={product} />
            <div className="mt-3">
                <p className="text-sm font-semibold text-center">{product.productName}</p>
                <p className="font-bold text-center">{formatPrice(product.price)}</p>
            </div>

        </Link>
    );
}


export default ProductsCard