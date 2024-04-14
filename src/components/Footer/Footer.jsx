import { useSelector } from "react-redux";
import ContactFooter from "../../modules/Footer/ContactFooter/ContactFooter";
import LinksFooter from "../../modules/Footer/LinksFooter";

export default function Footer() {
    const { msgFooter } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)
    const year = new Date().getFullYear();

    return (
        <div
            style={{
                direction: lang == "ar" ? "rtl" : "ltr"
            }}
            className="bg-primary text-seconder !py-12 p-4 md:p-0 font-primary flex flex-col gap-6"
        >
            <div className="container md:flex-row flex-col mx-auto flex md:gap-2 gap-12 justify-between">
                <ContactFooter />
                <LinksFooter />
                <p className="flex-1 flex items-center leading-8">
                    {msgFooter}
                </p>
            </div>
            <p className="text-center">
                Smart Switch {year} @ All Right Reserved
            </p>
        </div>
    )
}
