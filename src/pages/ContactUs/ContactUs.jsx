import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import FormContactUs from "../../modules/ContactUs/FormContactUs/FormContactUs";
import TitleContactUs from "../../modules/ContactUs/TitleContactUs";

export default function ContactUs() {
    const language = useSelector((state) => state.translations.language)

    return (
        <>
            <Header />
            <div
                style={{
                    direction: language == "ar" ? "rtl" : "ltr"
                }}
                className="container mx-auto py-24 flex flex-col md:flex-row md:gap-4 gap-16">
                <TitleContactUs />
                <FormContactUs />
            </div>
            <Footer />
        </>
    )
}
