import { useState } from "react";
import { useSelector } from "react-redux";
import RangePriceInput from "./RangePriceInput";

export default function PriceRange() {
    const {
        priceRange,
        // minPrice,
        // maxPrice,
        allPrice,
        underTweeny
    } = useSelector((state) => state.translations.translations)

    const [checked, setChecked] = useState(allPrice)

    const priceRangeData = [
        allPrice,
        underTweeny,
        "$25 to $100",
        "$100 to $300",
        "$300 to $500",
        "$500 to $1,000",
        "$1,000 to $10,000",
    ]

    return (
        <div className="flex flex-col gap-2">
            <p className="font-medium">
                {priceRange}
            </p>
            <RangePriceInput />
            <div className="flex flex-col">
                {priceRangeData.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-1 w-fit" onClick={() => setChecked(item)}>
                            <input
                                type="radio"
                                defaultChecked={item == allPrice && true}
                                name="price"
                                id={`price-${index}`} />
                            <label
                                htmlFor={`price-${index}`}
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
