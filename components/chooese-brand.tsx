/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetProductBrands } from "@/api/getProductBrands"
import { BrandType } from "@/types/brand"
import { ResponseType } from "@/types/response"
import Link from "next/link"


const ChooseBrand = () => {

    const { result, loading }: ResponseType = useGetProductBrands()
    return (
        <div className="mx-auto sm:max-w-4xl md:max-w-6xl px-4 sm:px-6 lg:px-8 p-8 sm:p-24">
            <h3 className="pb-4 text-xl sm:pb-2 sm:text-3xl text-center font-bold">
                Sneakers
            </h3>
            <div className="max-w-6xl py-4 mx-auto sm:py-8 sm:px-24">
                <div className="grid select-none sm:grid-cols-3 gap-2 md:gap-8">
                    {!loading && result !== undefined && (
                        result.map((brand: BrandType) => (
                            <Link
                                key={brand.id}
                                href={`/brand/${brand.slug}`}
                                className="flex justify-center items-center dark:bg-white bg-opacity-50 rounded-xl shadow-md  dark:shadow-md dark:shadow-white/50 p-4 hover:bg-slate-50 dark:hover:bg-slate-100"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${brand.logoMain.url}`}
                                    alt={brand.nameBrand}
                                    className="w-auto h-28 transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                />

                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChooseBrand