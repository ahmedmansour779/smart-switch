import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function QuantityProductDetails() {
    const [count, setCount] = useState(1)

    return (
        <div className="flex flex-col gap-2">
            <p>Quantity</p>
            <div className="border border-solid border-[#E4E7E9] p-3 rounded-md flex gap-12 w-fit items-center">
                <div onClick={() => { count > 1 && setCount(count - 1) }}>
                    <IconMinus size={15} />
                </div>
                <div className="text-sm">
                    {count}
                </div>
                <div onClick={() => setCount(count + 1)}>
                    <IconPlus size={15} />
                </div>
            </div>
        </div>
    )
}
