import { IconArrowLeft } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { cartData } from "../../data/cartData"
import ItemDetails from "./ItemDetails"

export default function ShoppingCartSection() {
    const {
        shoppingCard,
        products,
        price,
        quantity,
        subTotal,
        returnToShop,
        updateCart
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="border-[1px] border-solid border-[#E4E7E9] rounded-md md:flex-[3] flex-1">
            <h1 className="p-4 border-b-[1px] border-solid border-[#E4E7E9] text-lg font-medium">
                {shoppingCard}
            </h1>
            <div className="grid grid-cols-6 px-4 py-2 border-b-[1px] border-solid border-[#E4E7E9] bg-[#F2F4F5] uppercase text-sm">
                <p className="col-span-3">{products}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p>{subTotal}</p>
            </div>
            <div className="flex flex-col gap-2 py-4 border-b-[1px] border-solid border-[#E4E7E9]">
                {
                    cartData.map((item, index) => {
                        return (
                            <ItemDetails product={item} key={index} />
                        )
                    })
                }
            </div>
            <div className="p-4 flex justify-between">
                <Link to="/" className="flex gap-2 text-primary border-[3px] border-primary p-2 uppercase font-medium">
                    <IconArrowLeft />
                    {returnToShop}
                </Link>
                <Link to="/cart" className="text-primary border-[3px] border-primary p-2 uppercase font-medium">
                    {updateCart}
                </Link>
            </div>
        </div>
    )
}
