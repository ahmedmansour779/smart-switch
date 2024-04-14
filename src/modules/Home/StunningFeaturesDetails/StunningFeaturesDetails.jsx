import { useSelector } from "react-redux"
import image from "../../../shared/Home/camera.png"
import ItemsStunningFeatures from "./ItemsStunningFeatures"

export default function StunningFeaturesDetails() {
    const {
        stunningFeatures,
        msgStunningFeatures
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="container mx-auto pt-16 "
        >
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-medium">
                        {stunningFeatures}
                    </h1>
                    <p className="text-sm text-light">
                        {msgStunningFeatures}
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col-reverse gap-8">
                    <ItemsStunningFeatures />
                    <img src={image} className="md:flex-1" />
                </div>
            </div>
        </div>
    )
}
