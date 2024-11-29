import { useGetProductField } from "@/api/getProductField"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilterType } from "@/types/filters"

type FilterGenderProps = {
    setFilterGender: (gender: string) => void
}

const FilterGender = (props: FilterGenderProps) => {
    const { setFilterGender } = props
    const { result, loading }: FilterType = useGetProductField()
    return (
        <div className="my-5">
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            <Tabs onValueChange={(value) => setFilterGender(value)} className="w-[300px]">
                <TabsList className="grid w-full grid-cols-3 rounded-xl">
                    {result !== null && result.schema.attributes.gender.enum.map((gender: string) => (
                        <TabsTrigger key={gender} value={gender} >
                            {gender}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    )
}

export default FilterGender