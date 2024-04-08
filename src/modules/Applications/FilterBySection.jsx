import { useSelector } from "react-redux";

export default function FilterBySection() {
    const {
        newArrival,
        featuredProducts,
        bestSellers,
        sale,
        network,
        homeSecurity,
        smartCarage,
        smartIrrigation,
        wifi,
        matter,
        bluetooth,
        filterBy,
        onePlus
    } = useSelector((state) => state.translations.translations)

    const categoryData = [
        newArrival,
        featuredProducts,
        bestSellers,
        sale,
        network,
        homeSecurity,
        smartCarage,
        smartIrrigation,
        wifi,
        matter,
        bluetooth,
        onePlus
    ]

    return (
        <div className="flex flex-col gap-2 w-fit">
            <p>{filterBy}</p>
            <div className="grid grid-cols-2 gap-1">
                {categoryData.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-1 w-fit">
                            <input
                                type="checkbox"
                                name="category"
                                id={`type-${index}`} />
                            <label
                                htmlFor={`type-${index}`}
                            >
                                {item}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
