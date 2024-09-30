import FilterGender from "./filter-gender"

type FiltersControlsCategoryProps = {
    setFilterGender: (gender: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterGender } = props
    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterGender setFilterGender={setFilterGender} />
        </div>
    )
}

export default FiltersControlsCategory