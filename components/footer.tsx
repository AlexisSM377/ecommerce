import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        url: "/isa"
    },
    {
        id: 2,
        name: "Productos",
        url: "/sneakers"
    },
    {
        id: 3,
        name: "Contacto",
        url: "#"
    },
    {
        id: 4,
        name: "Politica de privacidad",
        url: "#"
    }

];

const Footer = () => {
    return (
        <footer className="flex items-center justify-between mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between ">
                    <p className="font-bold">
                        Isa E-commerce
                    </p>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.url} className="hover:underline me-6 md:me-6">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    © 2024 Isa E-commerce. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;