import { useGetProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterType } from "@/types/filters"

type FilterColorProps = {
    setFilterColor: (color: string) => void
}

const FilterColor = (props: FilterColorProps) => {
    const { setFilterColor } = props
    const { result, loading }: FilterType = useGetProductField()
    return (
        <div>
            {loading && result === null && (
                <p>Cragando...</p>
            )}
            <Select onValueChange={(value) => setFilterColor(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecciona un color" />
                </SelectTrigger>
                <SelectContent >
                    {result !== null && result.schema.attributes.color.enum.map((color: string) => (
                        <div key={color} className="flex items-center space-x-2">
                            <SelectItem value={color} id={color} >
                                <Label htmlFor={color}>{color}</Label>
                            </SelectItem>

                        </div>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default FilterColor