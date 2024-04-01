import { IconPointFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setLanguage } from "../../../store/translation/translationSlice";

export default function Links() {
    const {
        smartProduct,
        applications,
        protocols,
        servicePacks,
        contactUs,
        lang
    } = useSelector((state) => state.translations.translations)
    const language = useSelector((state) => state.translations.language)
    const location = useLocation().pathname;
    const dispatch = useDispatch();

    const handelLanguage = () => {
        language == "en" && dispatch(setLanguage("ar"))
        language == "ar" && dispatch(setLanguage("en"))
    }

    return (
        <div
            style={{
                direction: language == "ar" ? "rtl" : "ltr"
            }}
            className="gap-4 justify-center hidden md:flex">
            <div className="flex flex-col gap-1 text-seconder items-center">
                <Link to="/">{smartProduct}</Link>
                {
                    location == "/" && <IconPointFilled size={10} />
                }
            </div>
            <div className="flex flex-col gap-1 text-seconder items-center">
                <Link to="/applications">{applications}</Link>
                {
                    location == "/applications" && <IconPointFilled size={10} />
                }
            </div>
            <div className="flex flex-col gap-1 text-seconder items-center">
                <Link to="/protocols">{protocols}</Link>
                {
                    location == "/protocols" && <IconPointFilled size={10} />
                }
            </div>
            <div className="flex flex-col gap-1 text-seconder items-center">
                <Link to="/servicePacks">{servicePacks}</Link>
                {
                    location == "/servicePacks" && <IconPointFilled size={10} />
                }
            </div>
            <div className="flex flex-col gap-1 text-seconder items-center">
                <Link to="/contactUs">{contactUs}</Link>
                {
                    location == "/contactUs" && <IconPointFilled size={10} />
                }
            </div>
            <p
                onClick={handelLanguage}
                className="text-seconder hover:cursor-pointer">
                {lang}
            </p>
        </div>
    )
}
