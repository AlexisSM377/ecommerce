import Image from "next/image";

const Landing = () => {
    return (
        <div className="flex items-center justify-between mx-auto sm:max-w-4xl md:max-w-6xl mt-8 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold">ISA STORE</h2>
                <p className="text-2xl font-bold mb-4 sm:text-5xl block">PISA CON ESTILO ELIJE ISA PARA CAMINAR CON ELEGANCIA!</p>

            </div>
            <div className="md:w-1/2">
                <Image
                    src="/img_2.jpeg"
                    alt="Zapato elegante ISA"
                    className="rounded-xl"
                    layout="responsive"
                    width={250} height={500}

                />
            </div>
        </div>
    )
}

export default Landing