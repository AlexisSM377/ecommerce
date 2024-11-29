"use client"
import { useAllProducts } from "@/api/getAllProduct"
import ProductsCard from "./components/products-card"
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import SkeletonShema from "@/components/skeletonSchema";

const Page = () => {
    const { result, loading }: ResponseType = useAllProducts();
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {
                loading ? (
                    <p className="text-center">Loading...</p>
                ) : result !== null && result.length > 0 ? (
                    <div>
                        <h1 className="text-6xl font-semibold text-center">Sneakers</h1>
                        <p className="text-center dark:text-blue-500 text-xl font-semibold mt-3">Busca tu mejor estilo</p>
                    </div>
                ) : (
                    <p className="text-center">No products found</p>
                )
            }
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
                    {
                        loading && (
                            <SkeletonShema grid={3} />
                        )
                    }
                    {
                        result !== null && result.map((product: ProductType) => (
                            <ProductsCard key={product.id} product={product} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Page