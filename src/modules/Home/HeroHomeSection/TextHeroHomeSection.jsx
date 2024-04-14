import { IconCircleCheckFilled } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function TextHeroHomeSection() {
    const {
        smartHome,
        titleOneHeroHomeSection,
        titleTwoHeroHomeSection,
        titleThreeHeroHomeSection,
        msgHeroHomeSection,
        tryNow,
        trueOneMsgHeroHomeSection,
        trueTwoMsgHeroHomeSection
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex flex-col gap-8 flex-1 md:text-start text-center">
            <div className="flex flex-col gap-4 jus">
                <p className="text-primary font-medium hidden md:block">{smartHome}</p>
                <div className="flex md:flex-col flex-row flex-wrap gap-4 justify-center md:justify-start">
                    <h1 className="text-3xl font-bold">{titleOneHeroHomeSection}</h1>
                    <h1 className="text-3xl font-bold">{titleTwoHeroHomeSection}</h1>
                    <h1 className="text-3xl font-bold text-primary">{titleThreeHeroHomeSection}</h1>
                </div>
                <p className="text-light text-sm">{msgHeroHomeSection}</p>
                <div>
                    <Link
                        to="/protocols"
                        className="py-2 px-6 text-sm font-medium bg-primary text-white w-fit rounded-xl ">
                        {tryNow}
                    </Link>
                </div>
            </div>
            <div className=" flex-col gap-4 text-sm text-light justify-center md:justify-start hidden md:flex">
                <div className="flex gap-1 ">
                    <IconCircleCheckFilled color="#1E995C" size={20} />
                    <p>
                        {trueOneMsgHeroHomeSection}
                    </p>
                </div>
                <div className="flex gap-1 ">
                    <IconCircleCheckFilled color="#1E995C" size={20} />
                    <p>
                        {trueTwoMsgHeroHomeSection}
                    </p>
                </div>
            </div>
        </div>
    )
}
