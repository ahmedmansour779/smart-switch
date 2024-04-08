import { useState } from "react";
import { useSelector } from "react-redux";

export default function CategoryFilterSection() {
    const {
        category,
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
    } = useSelector((state) => state.translations.translations)

    const categoryData = [
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

    const [checked, setChecked] = useState(allProducts)

    return (
        <div className="flex flex-col gap-2">
            <p className="font-medium uppercase w-fit">
                {category}
            </p>
            <div className="flex flex-col">
                {categoryData.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-1 w-fit" onClick={() => setChecked(item)}>
                            <input
                                type="radio"
                                defaultChecked={item == allProducts && true}
                                name="category"
                                id={`category-${index}`} />
                            <label
                                htmlFor={`category-${index}`}
                                className={checked == item ? "text-black font-medium" : "text-light"}
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
