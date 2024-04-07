import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import AccordionDetailsSection from "../../modules/ServicePacks/AccordionDetailsSection";
import FormMassage from "../../modules/ServicePacks/FormMassage";

export default function ServicePacks() {
    const {
        installationService,
        msgInstallationService,
        priceVary,
        hr
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)
    return (
        <>
            <Header />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
                className="py-16 container mx-auto flex flex-col gap-8"
            >
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-medium">
                        {installationService}
                    </h1>
                    <p className="text-light text-sm">
                        {msgInstallationService}
                    </p>
                    <div className="border border-solid border-[#E4E7E9] p-2 rounded-md flex gap-3 w-fit text-xs text-light">
                        <p>5{hr}</p>
                        <p>{priceVary}</p>
                        <p>EGP</p>
                    </div>
                </div>
                <div className="flex md:flex-row gap-8 flex-col">
                    <AccordionDetailsSection />
                    <FormMassage />
                </div>
            </div>
            <Footer />
        </>
    )
}
