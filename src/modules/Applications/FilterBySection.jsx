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
            <div className="grid grid-cols-2 grid-rows-1 gap-1">
                {categoryData.map((item, index) => {
                    return (
                        <div key={index} className="flex items-start gap-1 w-fit">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor={`type-${index}`}>
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                                        name="category"
                                        id={`type-${index}`}
                                    // or checked if you want it to be controlled
                                    />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            {/* <input
                                type="checkbox"
                                name="category"
                                id={`type-${index}`} /> */}
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
