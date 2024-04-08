import { IconShoppingCart } from "@tabler/icons-react"
import { useSelector } from "react-redux"

export default function ButtonsSectionProductDetails() {
    const {
        addToCard,
        buyNow
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex gap-4">
            <button className="bg-primary text-white py-2 px-8 rounded-md flex justify-center gap-1 uppercase font-medium">
                {addToCard}
                <IconShoppingCart />
            </button>
            <button className="border-primary border border-solid text-primary bg-transparent p-2 rounded-md uppercase font-medium">
                {buyNow}
            </button>
        </div>
    )
}
