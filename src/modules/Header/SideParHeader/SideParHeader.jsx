import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLanguage } from "../../../store/translation/translationSlice";

export default function SideParHeader() {
    const {
        smartProduct,
        applications,
        protocols,
        servicePacks,
        contactUs,
        lang,
        login,
        signUp
    } = useSelector((state) => state.translations.translations)
    const language = useSelector((state) => state.translations.language)
    const dispatch = useDispatch();
    const handelLanguage = () => {
        language == "en" && dispatch(setLanguage("ar"))
        language == "ar" && dispatch(setLanguage("en"))
    }
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="md:hidden">
                <IconMenu2 onClick={() => setShow(true)} color="white" />
            </div>
            <div className={`h-screen w-screen bg-primary top-0 ${show ? "left-0" : "left-[100vw] "} fixed transition-all duration-500 ease-in-out z-50`} onClick={() => setShow(false)}>
                <div className="absolute right-4 top-4">
                    <IconX color="white" />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center h-full text-seconder hover:cursor-pointer">
                    <Link to="/" >{smartProduct}</Link>
                    <Link to="/applications" >{applications}</Link>
                    <Link to="/protocols" >{protocols}</Link>
                    <Link to="/servicePacks" >{servicePacks}</Link>
                    <Link to="/contactUs" >{contactUs}</Link>
                    <Link to="/login" >{login}</Link>
                    <Link to="/signUp" >{signUp}</Link>
                    <p
                        onClick={handelLanguage}
                        className="text-seconder hover:cursor-pointer">
                        {lang}
                    </p>
                </div>
            </div>
        </>
    )
}
