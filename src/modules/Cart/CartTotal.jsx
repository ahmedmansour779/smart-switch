import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { cartData } from "../../data/cartData"

export default function CartTotal() {
    const {
        cardTotals,
        subTotal,
        shipping,
        discount,
        tax,
        total,
        proceedToCheckout
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    const sumTotal = cartData.reduce((acc, item) => {
        const itemTotal = parseFloat(item.price) * parseInt(item.quantity);
        return acc + itemTotal;
    }, 0);

    return (
        <div className="flex-1 p-4 border-[1px] border-solid border-[#E4E7E9] rounded-lg h-fit flex flex-col gap-4">
            <p className="text-lg font-medium">
                {cardTotals}
            </p>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <p className="text-light">{subTotal}</p>
                    <p>${sumTotal}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-light">{shipping}</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-light">{discount}</p>
                    <p>$24</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-light">{tax}</p>
                    <p>$61.99</p>
                </div>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>{total}</p>
                <p>$357.99 USD</p>
            </div>
            <Link to="/checkout" className="w-full bg-primary text-white rounded-md py-4 flex justify-center gap-2 uppercase font-medium" >
                {proceedToCheckout}
                {
                    lang == "en" ?
                        <IconArrowRight /> :
                        <IconArrowLeft />
                }
            </Link>
        </div>
    )
}
