import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Counter({ count }) {
    const [countValue, setCount] = useState(+count)

    const minesCount = () => {
        countValue > 1 && setCount(+countValue - 1)
    }

    return (
        <div className="flex border-[1px] border-solid border-[#E4E7E9] p-2 rounded-md w-fit gap-2">
            <IconMinus color={countValue == 1 ? "gray" : "black"} onClick={() => minesCount()} />
            <p>
                {countValue}
            </p>
            <IconPlus onClick={() => setCount(+countValue + 1)} />
        </div>
    )
}
