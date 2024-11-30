import FilterGender from "./filter-gender"

type FilterControlsBrandProps = {
    setFilterGender: (gender: string) => void
}

const FilterControlsBrand = (props: FilterControlsBrandProps) => {
    const { setFilterGender } = props
    return (
        <div className="flex justify-center ite">
            <FilterGender setFilterGender={setFilterGender} />
        </div>
    )
}

export default FilterControlsBrand