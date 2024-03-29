import { IconPointFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Links() {
    const {
        smartProduct,
        applications,
        protocols,
        servicePacks,
        contactUs
    } = useSelector((state) => state.translations.translations)
    const location = useLocation().pathname;

    return (
        <div className="flex gap-4 justify-center">
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
        </div>
    )
}
