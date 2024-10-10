/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetCategories } from "@/api/getProducts";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const { result, loading }: ResponseType = useGetCategories();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const paginatedData = result?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const totalPages = Math.ceil((result?.lenght || 0) / itemsPerPage)


    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h1 className="text-5xl font-bold text-center">
                CATEGORÍAS
            </h1>
            <p className="text-center font-medium text-base mt-3">
                Elige tu categoría favorita
            </p>
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                {!loading && paginatedData !== undefined && (
                    paginatedData.map((category: CategoryType) => (
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
                            <p className="absolute w-full py-2 text-lg font-bold text-center text-black bottom-5 backdrop-blur-lg">{category.categoryName}</p>
                        </Link>
                    ))
                )}
            </div>
            <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => handlePageChange(1)}
                            isActive={currentPage === 1 ? true : false}
                        >
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => handlePageChange(2)}
                            isActive={currentPage === 2 ? true : false}
                        >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                isActive={currentPage === index + 1 ? true : false}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </PaginationContent>

            </Pagination>
        </div>
    );
};

export default Page;