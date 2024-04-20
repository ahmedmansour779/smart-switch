import { useSelector } from "react-redux"
import ItemsWhatWeCanControl from "./ItemsWhatWeCanControl"

export default function WhatWeCanControl() {
    const { msgWhatWeCanControl } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            className="bg-[#0093FF12] py-10 overflow-hidden">
            <div className="container mx-auto flex flex-col gap-4">
                <h1
                    style={{
                        direction: lang == "en" ? "ltr" : "rtl"
                    }}
                    className="text-3xl font-bold">
                    {msgWhatWeCanControl}
                </h1>
                <ItemsWhatWeCanControl />
            </div>
        </div>
    )
}
