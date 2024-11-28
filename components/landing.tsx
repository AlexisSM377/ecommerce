import Image from "next/image";

const Landing = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto sm:max-w-4xl md:max-w-6xl mt-8 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2 mb-4">
                <h2 className="bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold text-center md:text-justify animate-blurred-fade-in duration-150 delay-150">ISA STORE</h2>
                <h3 className="text-2xl mb-4 sm:text-5xl  text-center md:text-justify max-w-lg font-bold animate-fade-in-up duration-200  delay-200">PISA CON ESTILO ELIJE ISA PARA CAMINAR CON ELEGANCIA!</h3>
            </div>
            <div className="md:w-1/2 ">
                <Image
                    src="/img_2.jpeg"
                    alt="Zapato elegante ISA"
                    className="rounded-2xl animate-zoom-in"
                    layout="responsive"
                    width={250} height={500}
                />
            </div>
        </div>
    )
}

export default Landing