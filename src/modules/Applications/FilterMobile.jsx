import { useSelector } from "react-redux"

export default function FilterMobile() {
    const {
        category,
        filterBy,
        allProducts,
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
        all
    } = useSelector((state) => state.translations.translations)

    const categoryData = [
        all,
        allProducts,
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
        bluetooth
    ]

    return (
        <div
            className="font-primary w-full flex flex-col justify-center items-center gap-4 bg-[#F7F7F7] pb-12"
        >
            <div className="w-fit flex gap-2 items-center justify-center">
                <label>{category}:</label>
                <select className="bg-transparent border border-solid border-gray-200 p-1 rounded-md text-sm text-light">
                    {
                        categoryData.map((item, index) => {
                            return (
                                <option key={index}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="w-fit flex gap-2 items-center justify-center">
                <label>{filterBy}:</label>
                <select
                    className="bg-transparent border border-solid border-gray-200 p-1 rounded-md text-sm text-light">
                    {
                        categoryData.map((item, index) => {
                            return (
                                <option key={index}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}
