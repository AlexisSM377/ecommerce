import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ProductType } from "@/types/product"
import { toast } from "./use-toast"

interface UseLovedProductsProps {
    lovedItems: ProductType[]
    addLoveItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLovedProductsProps>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: ProductType) => {
        const currenLovedItems = get().lovedItems
        const existingItem = currenLovedItems.find((item) => item.id === data.id)

        if (existingItem) {
            return toast({
                title: "El producto ya está en favoritos",
                variant: "destructive"
            })
        }

        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast({
            title: "Producto añadido a favoritos ❤️"
        })
    },
    removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] })
        toast({
            title: "Producto se ha eliminado de la lista 💔"
        })

    }
}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))