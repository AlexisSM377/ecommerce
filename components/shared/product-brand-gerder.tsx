

interface ProductBrandGenderProps {
    nameBrand: string
    gender: string
}

const ProductBrandGender = (props: ProductBrandGenderProps) => {

    const { nameBrand, gender } = props
    return (
        <div className="flex items-center gap-3 mt-3">
            <p className="text-sm px-2 py-1 text-white bg-black rounded-xl font-medium dark:bg-white dark:text-black w-fit">
                {nameBrand}
            </p>
            <p className="text-sm px-2 py-1 text-white bg-yellow-900 rounded-xl w-fit font-medium">
                {gender}
            </p>
        </div>
    )
}

export default ProductBrandGender