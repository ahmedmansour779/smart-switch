import { IconCircleCheckFilled } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function TextHeroHomeSection() {
    const {
        smartHome,
        titleHeroHomeSection,
        msgHeroHomeSection,
        tryNow,
        trueOneMsgHeroHomeSection,
        trueTwoMsgHeroHomeSection
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-4">
                <p className="text-primary font-medium">{smartHome}</p>
                <h1 className="text-3xl font-bold">{titleHeroHomeSection}</h1>
                <p className="text-light text-sm">{msgHeroHomeSection}</p>
                <Link
                    to="/protocols"
                    className="py-2 px-6 text-sm font-medium bg-primary text-white w-fit rounded-xl">
                    {tryNow}
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-light">
                <div className="flex gap-1">
                    <IconCircleCheckFilled color="#1E995C" size={20} />
                    <p>
                        {trueOneMsgHeroHomeSection}
                    </p>
                </div>
                <div className="flex gap-1">
                    <IconCircleCheckFilled color="#1E995C" size={20} />
                    <p>
                        {trueTwoMsgHeroHomeSection}
                    </p>
                </div>
            </div>
        </div>
    )
}
