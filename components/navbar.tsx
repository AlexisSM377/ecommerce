"use client"
import { BaggageClaim, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-card";
import { useLovedProducts } from "@/hooks/use-loved-products";
import LogoutButton from "./LogoutButton";


const Navbar = () => {

    const router = useRouter();
    const car = useCart()
    const { lovedItems } = useLovedProducts()

    return (
        <div className="flex items-center justify-between mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl mt-6 px-4 sm:px-6 lg:px-8">
            <h1 className="bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold" onClick={() => router.push("/")}>
                ISA
                <span className="font-bold"> STORE</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {car.items.length === 0 ?
                    <ShoppingCart
                        strokeWidth="1"
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    /> : (
                        <div className="flex gap-1" onClick={() => router.push("/cart")} >
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span>{car.items.length}</span>
                        </div>
                    )
                }

                <Heart
                    strokeWidth="1"
                    className={`cursor-pointer ${lovedItems.length > 0 && ' fill-black dark:fill-white'}`}
                    onClick={() => router.push("/loved-products")} />


                <LogoutButton />

                <ToggleTheme />
            </div>
        </div>
    )
}

export default Navbar;