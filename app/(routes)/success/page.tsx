"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/home.jpg" width={800} height={800} alt="Success" className="py-4" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl ">
                        ¡Gracias por tu compra!
                    </h1>
                    <p className="my-3">
                        Tu pedido se ha realizado con éxito.
                    </p>
                    <p className="my-3">
                        Si tienes alguna pregunta, no dudes en contactarnos.
                    </p>

                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>

            </div>
        </div>
    )
}

export default Page