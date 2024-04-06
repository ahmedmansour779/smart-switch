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
            className="container mx-auto pt-16 flex lg:flex-nowrap flex-wrap flex-col md:flex-row gap-8"
        >
            <div className="flex flex-col gap-4 md:flex-1">
                <h1 className="text-3xl font-medium">
                    {stunningFeatures}
                </h1>
                <p className="text-sm text-light">
                    {msgStunningFeatures}
                </p>
                <ItemsStunningFeatures />
            </div>
            <img src={image} className="md:flex-1" />
        </div>
    )
}
