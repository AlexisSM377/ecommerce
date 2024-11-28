"use client"
import { useGetBrand } from "@/api/getBrand"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import BrandCard from "./components/brand-card"
import { ProductType } from "@/types/product"
import SkeletonShema from "@/components/skeletonSchema"
import { useState } from "react"
import FilterControlsBrand from "./components/filters-controls-brand"
import FilterColor from "./components/filter-color"
import PriceSlider from "@/components/shared/price-slider"

export default function Page() {


    const params = useParams()
    const { brandSlug } = params
    const { result, loading }: ResponseType = useGetBrand(brandSlug);

    const [filterGender, setFilterGender] = useState('')
    const [filterColor, setFilterColor] = useState('')
    const [filterPrice, setFilterPrice] = useState(0);


    const filteredProducts = result !== null && !loading && (
        result.filter((product: ProductType) => {
            const genderMatch = filterGender === '' || product.gender === filterGender;
            const colorMatch = filterColor === '' || product.color === filterColor;
            const priceMatch = filterPrice === 0 || product.price <= filterPrice;
            return genderMatch && colorMatch && priceMatch;
        })
    );
    const clearFilters = () => {
        setFilterGender('');
        setFilterColor('');
        setFilterPrice(0);
    }
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : result !== null && result.length > 0 ? (
                <h1 className="text-5xl font-semibold text-center">{result[0].brand.nameBrand}</h1>
            ) : (
                <p className="text-center">Brand not found</p>
            )}

            <div onClick={clearFilters} className="group flex w-full justify-end rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">
                <button>
                    Clear filters
                </button>
            </div>

            <FilterControlsBrand setFilterGender={setFilterGender} />
            <div className="flex justify-center items-center gap-6">
                <FilterColor setFilterColor={setFilterColor} />
                <PriceSlider setFilterPrice={setFilterPrice} />
            </div>
            <div className="sm:flex sm:justify-center">
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
                    {loading && (
                        <SkeletonShema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <BrandCard key={product.id} product={product} />
                        ))
                    )}
                </div>
                {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                    <p className="text-lg font-medium mt-4">No hay sneakers con ese filtro</p>

                )}
            </div>


        </div>
    )
} 