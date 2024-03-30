import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LinksFooter() {
    const { Links,
        faqs,
        termsAndConditions,
        privacyPolicy,
        submitDeals,
        contactUs
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex flex-col gap-4 flex-1">
            <h1 className="font-semibold text-lg">{Links}</h1>
            <div className="flex flex-col gap-2 text-sm capitalize font-light">
                <Link className="w-fit" to="/faqs">{faqs}</Link>
                <Link className="w-fit" to="/contactUs">{contactUs}</Link>
                <Link className="w-fit" to="/termsAndConditions">{termsAndConditions}</Link>
                <Link className="w-fit" to="/privacyPolicy">{privacyPolicy}</Link>
                <Link className="w-fit" to="/submitDeals">{submitDeals}</Link>
            </div>
        </div>
    )
}
