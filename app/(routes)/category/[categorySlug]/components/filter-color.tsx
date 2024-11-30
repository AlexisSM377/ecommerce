import { useGetProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterType } from "@/types/filters"

type FilterColorProps = {
    setFilterColor: (color: string) => void
}

const FilterColor = (props: FilterColorProps) => {
    const { setFilterColor } = props
    const { result, loading }: FilterType = useGetProductField()
    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Colores</p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterColor(value)}>
                {result !== null && result.schema.attributes.color.enum.map((color: string) => (
                    <div key={color} className="flex items-center space-x-2">
                        <RadioGroupItem value={color} id={color} />
                        <Label htmlFor={color}>{color}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterColor