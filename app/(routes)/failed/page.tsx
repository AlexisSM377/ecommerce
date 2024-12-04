'use client'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Page = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/this-is-fine.gif" width={600} height={600} alt="Failed" className="py-4" />
                </div>


                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl sm:text-5xl ">
                        Su compra ha fallado
                    </h1>

                    <p className="my-3 text-red-500 font-medium text-xl md:text-2xl">
                        Por favor, inténtalo de nuevo.
                    </p>

                    <Button onClick={() => router.push("/sneakers")}>Volver a la tienda</Button>
                </div>

            </div>
        </div>
    )
}

export default Page