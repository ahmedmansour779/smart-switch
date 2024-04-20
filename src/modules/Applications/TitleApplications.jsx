import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function TitleApplications() {
    const route = useLocation()

    const {
        msgApplications
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="py-12 text-center flex flex-col gap-4 md:bg-transparent bg-[#F7F7F7]">
            <p className="text-2xl font-medium uppercase">
                {route.pathname.slice(1)} {">"} central heating
            </p>
            <p className="text-light text-sm">
                {msgApplications}
            </p>
        </div>
    )
}
