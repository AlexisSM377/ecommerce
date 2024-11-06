/* eslint-disable @next/next/no-img-element */
"use client"

import { useGetCategories } from "@/api/getProducts"
import { CategoryType } from "@/types/category"
import { ResponseType } from "@/types/response"
import Link from "next/link"

const ChooseCategory = () => {

    const { result, loading }: ResponseType = useGetCategories()

    return (
        <div className="max-w-6xl py-24 mx-auto sm:py-24 sm:px-24">
            <div className="flex justify-between">
                <h3 className="px-6 pb-4 text-xl sm:pb-8 sm:text-3xl">Elige tu categoría favorita</h3>
                <Link href="/categories" className="text-lg">Ver todas</Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.slice(0, 3).map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                        >
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                                alt={category.categoryName}
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                            />
                            <p className="absolute w-full py-2 text-lg  font-bold text-center text-black bottom-5 backdrop-blur-lg">{category.categoryName}</p>

                        </Link>
                    ))
                )}


            </div>
        </div>
    )
}

export default ChooseCategory