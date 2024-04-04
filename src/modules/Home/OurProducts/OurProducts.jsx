import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ourProductData } from "../../../data/ourProduct"

export default function OurProducts() {
    const {
        ourProducts,
        ourProductsMsg,
        viewDetails,
        viewAll
    } = useSelector((state) => state.translations.translations)
    return (
        <div className="py-12 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-4xl font-medium">
                    {ourProducts}
                </h1>
                <p className="text-sm text-light">
                    {ourProductsMsg}
                </p>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
                {
                    ourProductData.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center gap-4 p-8 shadow-md bg-white">
                                <img src={item.image} />
                                <h2 className="text-lg font-medium">
                                    {
                                        item.title
                                    }
                                </h2>
                                <div className="flex justify-between w-full">
                                    <Link className="text-primary" to={`/products/${item.id}`}>
                                        {viewDetails}
                                    </Link>
                                    <p>
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to="/products" className="text-white bg-primary px-8 py-2 rounded-lg">
                {
                    viewAll
                }
            </Link>
        </div>
    )
}
