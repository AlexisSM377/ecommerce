"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link"



const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                                        href="/isa"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Zapateria ISA
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Somos una zapateria que se dedica a la venta de zapatos de calidad a precios accesibles.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Tienda">
                                Ver todos los productos
                            </ListItem>
                            <ListItem href="/addres" title="Ubicacion">
                                Encuentra nuestra ubicacion
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/sneakers" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Sneakers
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Marcas</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] text-center">

                            {sneakers.map((sneaker) => (
                                <ListItem
                                    key={sneaker.title}
                                    title={sneaker.title}
                                    href={sneaker.href}
                                >

                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">

                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const sneakers: { title: string; href: string }[] = [
    {
        title: "Adidas",
        href: "/brand/adidas",
    },
    {
        title: "Nike",
        href: "/brand/nike",
    }
]

const components: { title: string; href: string, description: string }[] = [
    {
        title: "Casual",
        href: "/category/casual",
        description: "Zapatos casuales para el dia a dia"
    },
    {
        title: "Entrenamiento y gym",
        href: "/category/entrenamiento",
        description: "Zapatos deportivos para hacer ejercicio"
    },
    {
        title: "Running",
        href: "/category/runnig",
        description: "Zapatos para correr"
    },
    {
        title: "Basquetbol",
        href: "/category/basquetbol",
        description: "Zapatos para jugar basquetbol"
    }
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


