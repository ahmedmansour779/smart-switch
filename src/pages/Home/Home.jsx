import ExampleOfWork from "../../modules/Home/ExampleOfWork";
import OurAchievements from "../../modules/Home/OurAchievements";
import OurClient from "../../modules/Home/OurClient/OurClient";
import OurProducts from "../../modules/Home/OurProducts";

export default function Home() {
    return (
        <div>
            {/* <HeroHomeSection /> */}
            <ExampleOfWork />
            <OurAchievements />
            <OurProducts />
            <OurClient />
        </div>
    )
}
