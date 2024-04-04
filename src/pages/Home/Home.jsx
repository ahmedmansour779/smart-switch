import HeroHomeSection from "../../modules/Home/HeroHomeSection";
import OurClient from "../../modules/Home/OurClient/OurClient";
import OurProducts from "../../modules/Home/OurProducts";

export default function Home() {
    return (
        <div>
            <HeroHomeSection />
            <OurProducts />
            <OurClient />
        </div>
    )
}
