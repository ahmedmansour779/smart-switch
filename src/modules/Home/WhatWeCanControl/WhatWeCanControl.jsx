import { useSelector } from "react-redux"
import image from "../../../shared/Home/Devices.png"

export default function WhatWeCanControl() {
    const { msgWhatWeCanControl } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="bg-[#0093FF12] py-10">
            <div className="container mx-auto flex flex-col gap-4">
                <h1 className="text-3xl font-bold">
                    {msgWhatWeCanControl}
                </h1>
                <img src={image} />
            </div>
        </div>
    )
}
