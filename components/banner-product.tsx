import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p className="opacity-80 text-lg text-gray-900 dark:text-gray-400 font-medium">Sumérgete a una experiencia de compra única</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">¡Descubre los productos más vendidos!</h4>
                <p className="my-2 text-lg ">¡No te quedes sin el tuyo!</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[200px] bg-cover lg:h-[600px] bg-[url('/banner.jpg')] bg-center mt-16 transition duration-300 ease-in-out hover:scale-110" />


        </>

    )
}

export default BannerProduct  