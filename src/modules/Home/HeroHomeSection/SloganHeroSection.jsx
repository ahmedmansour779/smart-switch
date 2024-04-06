import { IconPointFilled, IconShareplay } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import degree from "../../../shared/Home/heroSection/degree.png"
import hand from "../../../shared/Home/heroSection/hand.png"
import lines from "../../../shared/Home/heroSection/lines.png"

export default function SloganHeroSection() {
    const {
        airConditioner,
        threeDevice
    } = useSelector((state) => state.translations.translations)
    return (
        <div className="flex-1 relative h-fit">
            <div className="bg-white w-fit p-2 flex flex-col items-center gap-1 rounded-lg absolute top-0 right-8 z-30">
                <div className="bg-[#ECF4F8] rounded-full p-2">
                    <IconShareplay color="#39A2DB" />
                </div>
                <p className="text-sm">{airConditioner}</p>
                <p className="text-light text-xs">{threeDevice}</p>
                <IconPointFilled color="#1E995C" />
            </div>
            <img src={hand} alt="" className="z-10" />
            <img src={degree} alt="" className="absolute top-0 h-72 right-52" />
            <img src={lines} alt="" className="absolute top-0 right-0" />
        </div>
    )
}
