import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <Menu />
                </PopoverTrigger>
                <PopoverContent>
                    <Link href="/categories/casual" className="block">Casual</Link>
                    <Link href="/categories/deportivo" className="block">Deportivo</Link>
                    <Link href="/categories/formal" className="block">Formal</Link>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ItemsMenuMobile;