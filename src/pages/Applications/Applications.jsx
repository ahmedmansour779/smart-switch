import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import FilterApplications from "../../modules/Applications/FilterApplications";
import ItemsApplications from "../../modules/Applications/ItemsApplications";
import TitleApplications from "../../modules/Applications/TitleApplications";

export default function Applications() {
    const lang = useSelector((state) => state.translations.language)
    return (
        <>
            <Header />
            <TitleApplications />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
                className="container mx-auto flex gap-8 py-12">
                <FilterApplications />
                <ItemsApplications />
            </div>
            <Footer />
        </>
    )
}
