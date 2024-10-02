"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonShema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";


export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
    const router = useRouter()

    const [filterGender, setFilterGender] = useState('')
    const [filterColor, setFilterColor] = useState('')

    const filteredProducts = result !== null && !loading && (
        filterGender === '' || filterColor === ''
            ? result
            : result.filter((product: ProductType) =>
                product.gender === filterGender && product.color === filterColor)
    )
    const handleResetFilters = () => {
        setFilterGender('');
        setFilterColor('');
    };

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex items-center justify-between">
                {result !== null && !loading && (
                    <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
                )}
                <div onClick={handleResetFilters} className="bg-green-300 rounded-xl p-2 dark:text-black mb-3 font-semibold">
                    <button>Borrar filtro</button>
                </div>
            </div>


            <Separator />
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterGender={setFilterGender} setFilterColor={setFilterColor} />
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonShema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro</p>
                    )}
                </div>
            </div>

        </div>
    )
}