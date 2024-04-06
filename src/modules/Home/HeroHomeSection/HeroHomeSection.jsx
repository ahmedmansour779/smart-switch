import { useSelector } from "react-redux";
import SloganHeroSection from "./SloganHeroSection";
import TextHeroHomeSection from "./TextHeroHomeSection";

export default function HeroHomeSection() {
    const lang = useSelector((state) => state.translations.language)
    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="bg-[#F7F7F7] py-8 overflow-hidden">
            <div className="container mx-auto flex md:flex-row flex-col gap-4 md:gap-0 relative">
                <TextHeroHomeSection />
                <SloganHeroSection />
            </div>
        </div>
    )
}
