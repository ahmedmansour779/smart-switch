import { IconPointFilled, IconShareplay } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import degree from "../../shared/Home/heroSection/degree.png"
import hand from "../../shared/Home/heroSection/hand.png"

export default function SloganForm() {
    const {
        airConditioner,
        threeDevice
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="h-lvh bg-primary md:flex-[2] hidden md:flex relative">
            <div className="bg-white w-fit p-2 flex flex-col items-center gap-1 rounded-lg absolute top-1/4 right-8 z-30">
                <div className="bg-[#ECF4F8] rounded-full p-2">
                    <IconShareplay color="#39A2DB" />
                </div>
                <p className="text-sm">{airConditioner}</p>
                <p className="text-light text-xs">{threeDevice}</p>
                <IconPointFilled color="#1E995C" />
            </div>
            <img src={degree} alt="" className="absolute top-1/3 h-72 right-[40%]" />
            <img src={hand} alt="" />
        </div>
    )
}
