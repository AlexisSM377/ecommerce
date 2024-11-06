import { useState } from "react"

import { Slider } from "../ui/slider"
import { Label } from "../ui/label"

interface PriceSliderProps {
    setFilterPrice: (price: number) => void
}

const PriceSlider = (props: PriceSliderProps) => {

    const { setFilterPrice } = props
    const [price, setPrice] = useState(0)

    const handleChange = (value: number[]) => {
        const newPrice = value[0]
        setPrice(newPrice)
        setFilterPrice(newPrice)
    }
    return (
        <div>
            <Label htmlFor="price" className="items-center justify-center flex p-1">Precio: ${price}</Label>
            <Slider
                value={[price]}
                onValueChange={handleChange}
                min={0}
                max={5000}
                step={1}
                className="w-[150px]" />
        </div>
    )
}

export default PriceSlider