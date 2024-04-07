/* eslint-disable react/prop-types */
import { IconX } from "@tabler/icons-react";
import Counter from "../../components/Form/Counter";

// eslint-disable-next-line react/prop-types
export default function ItemDetails({ product }) {
    return (
        <div className="grid grid-cols-6 items-center">
            <div className="col-span-3 flex items-center gap-1 px-4">
                <div className="text-red-600 border border-solid border-red-600 h-fit p-1 rounded-full">
                    <IconX size={15} />
                </div>
                <img src={product.image} />
                <p>
                    {product.title}
                </p>
            </div>
            <p className="flex gap-1">
                {
                    product.oldPrice &&
                    <p className="text-light line-through">
                        ${product.oldPrice}
                    </p>
                }
                {
                    <p>
                        ${product.price}
                    </p>
                }
            </p>
            <Counter count={product.quantity} />
            <p>
                ${product.quantity * product.price}
            </p>
        </div>
    )
}
