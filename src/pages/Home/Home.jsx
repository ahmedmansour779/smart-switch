import ExampleOfWork from "../../modules/Home/ExampleOfWork";
import OurAchievements from "../../modules/Home/OurAchievements";
import OurClient from "../../modules/Home/OurClient/OurClient";
import OurProducts from "../../modules/Home/OurProducts";
import StunningFeatures from "../../modules/Home/StunningFeatures";
import WhatWeCanControl from "../../modules/Home/WhatWeCanControl";

export default function Home() {
    return (
        <div>
            {/* <HeroHomeSection /> */}
            <StunningFeatures />
            <WhatWeCanControl />
            <ExampleOfWork />
            <OurAchievements />
            <OurProducts />
            <OurClient />
        </div>
    )
}
