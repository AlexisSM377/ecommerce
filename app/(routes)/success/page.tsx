"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row ">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" width={250} height={500} alt="Success" className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl ">
                        ¡Gracias por tu compra!
                    </h1>
                    <p className="my-3">
                        Tu pedido se ha realizado con éxito.
                    </p>
                    <p className="my-3">
                        Recibirás un correo con los detalles de tu compra.
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