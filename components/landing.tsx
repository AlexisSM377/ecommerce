import { Button } from "@/components/ui/button"
import Image from "next/image";
import mountains from "../public/img_2.jpeg";

const Landing = () => {
    return (
        <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl mt-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold">ISA STORE</h2>
                <h1 className="text-2xl font-bold mb-4 sm:text-6xl block">PISA CON ESTILOELIJE ISA PARA CAMINAR CON ELEGANCIA!</h1>
                <Button className="bg-black text-white hover:bg-gray-800">
                    Shop Now
                </Button>
            </div>
            <div className="md:w-1/2">
                <Image
                    src={mountains}
                    alt="Zapato elegante ISA"
                    className="w-full h-auto object-cover"
                    layout="responsive"
                    width={700}
                    height={475}
                />
            </div>
        </div>
    )
}

export default Landing