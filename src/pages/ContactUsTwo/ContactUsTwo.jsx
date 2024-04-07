import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import ContentContactUsTwo from "../../modules/ContactUSTwo/ContentContactUsTwo";
import TitleContactUSTwo from "../../modules/ContactUSTwo/TitleContactUSTwo";

export default function ContactUsTwo() {
    const lang = useSelector((state) => state.translations.language)

    return (
        <>
            <Header />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
            >
                <TitleContactUSTwo />
                <ContentContactUsTwo />
            </div>
            <Footer />
        </>
    )
}
