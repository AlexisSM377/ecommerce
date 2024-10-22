import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center py-24">
            <h3 className="mb-3 opacity-80 text-lg text-gray-900 dark:text-gray-400 font-medium">Nike Running</h3>
            <h2 className="text-3xl sm:text-6xl font-bold uppercase text-primary">GANAR ES INCÓMODO</h2>
            <p className="text-sm sm:text-base mt-3">Si no odias un poco correr, no lo amas lo suficiente.</p>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="/brand/nike" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({ variant: "outline" })}>Conocer más</Link>

            </div>
        </div>
    )
}

export default BannerDiscount