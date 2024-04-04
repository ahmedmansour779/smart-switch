import HeroHomeSection from "../../modules/Home/HeroHomeSection";
import OurAchievements from "../../modules/Home/OurAchievements";
import OurClient from "../../modules/Home/OurClient/OurClient";
import OurProducts from "../../modules/Home/OurProducts";

export default function Home() {
    return (
        <div>
            <HeroHomeSection />
            <OurAchievements />
            <OurProducts />
            <OurClient />
        </div>
    )
}
