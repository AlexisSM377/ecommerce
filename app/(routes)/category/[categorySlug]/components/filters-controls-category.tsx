import FilterColor from "./filter-color"
import FilterGender from "./filter-gender"

type FiltersControlsCategoryProps = {
    setFilterGender: (gender: string) => void
    setFilterColor: (color: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterGender } = props
    const { setFilterColor } = props
    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterGender setFilterGender={setFilterGender} />
            <FilterColor setFilterColor={setFilterColor} />
        </div>
    )
}

export default FiltersControlsCategory