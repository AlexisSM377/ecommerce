import { useGetProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterType } from "@/types/filters"

type FilterGenderProps = {
    setFilterGender: (gender: string) => void
}

const FilterGender = (props: FilterGenderProps) => {
    const { setFilterGender } = props
    const { result, loading }: FilterType = useGetProductField()
    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Género</p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterGender(value)}>
                {result !== null && result.schema.attributes.gender.enum.map((gender: string) => (
                    <div key={gender} className="flex items-center space-x-2">
                        <RadioGroupItem value={gender} id={gender} />
                        <Label htmlFor={gender}>{gender}</Label>

                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterGender