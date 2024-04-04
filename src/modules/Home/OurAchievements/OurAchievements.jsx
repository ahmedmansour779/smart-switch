import { useSelector } from "react-redux"
import image from "../../../shared/Home/ExperienceSection.png"

export default function OurAchievements() {
    const {
        ourAchievements,
        ourAchievementsTitle,
        ourAchievementsMsg,
        installationDone,
        userWorldwide,
        countries
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="flex md:flex-row flex-col gap-8 md:gap-0 py-20 relative">
            <img src={image} className="w-auto lg:h-96 md:h-80 top-28 md:absolute" />
            <div className="w-1/3 relative"></div>
            <div className="flex-1 md:w-2/3 w-full">
                <div className="bg-primary text-white flex py-16 justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <p className="text-xs">
                            {ourAchievements}
                        </p>
                        <p className="text-3xl font-medium">
                            {ourAchievementsTitle}
                        </p>
                        <p className="text-sm">
                            {ourAchievementsMsg}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-12 py-8">
                        <div className="flex flex-col gap-4 items-center">
                            <p className="text-primary text-3xl font-bold">
                                5k+
                            </p>
                            <p className="text-sm">
                                {installationDone}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <p className="text-primary text-3xl font-bold">
                                150k+
                            </p>
                            <p className="text-sm">
                                {userWorldwide}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <p className="text-primary text-3xl font-bold">
                                26+
                            </p>
                            <p className="text-sm">
                                {countries}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
