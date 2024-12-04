import { ChartBarStacked, Footprints, House, Menu, UsersRound } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const ItemsMenuMobile = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu />
                </SheetTrigger>
                <SheetContent>
                    <div className="space-y-4">

                        <SheetTitle>
                            <SheetClose asChild>

                                <Link href="/" className="flex items-center gap-2">
                                    <House />
                                    Home
                                </Link>
                            </SheetClose>
                        </SheetTitle>
                        <SheetTitle>
                            <SheetClose asChild>

                                <Link href="/isa" className="flex items-center gap-2">
                                    <UsersRound />
                                    Sobre nosotros
                                </Link>
                            </SheetClose>
                        </SheetTitle>
                        <SheetTitle>
                            <SheetClose asChild>

                                <Link href="/sneakers" className="flex items-center gap-2">
                                    <Footprints />
                                    Sneakers
                                </Link>
                            </SheetClose>
                        </SheetTitle>

                    </div>

                    <SheetTitle className="pt-4 flex items-center gap-2">
                        <Footprints />
                        Marcas
                    </SheetTitle>
                    <div className="px-8 py-2 space-y-2">
                        {
                            sneakers.map((sneaker) => (
                                <SheetClose asChild key={sneaker.title}>

                                    <Link href={sneaker.href} className="block">{sneaker.title}</Link>
                                </SheetClose>
                            ))
                        }
                    </div>
                    <SheetTitle className="flex items-center gap-2 ">
                        <ChartBarStacked />
                        Categorias
                    </SheetTitle>
                    <div className="px-8 space-y-2 py-2">
                        <SheetClose asChild>
                            <Link href="/category/casual" className="block">Casual</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/category/entrenamiento" className="block">Entrenamiento y gym</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/category/running" className="block">Runnig</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/category/basquetbol" className="block">Básquetbol</Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default ItemsMenuMobile;

const sneakers: { title: string; href: string }[] = [
    {
        title: "Converse",
        href: "/brand/converse",
    },
    {
        title: "Adidas",
        href: "/brand/adidas",
    },
    {
        title: "Nike",
        href: "/brand/nike",
    }
]