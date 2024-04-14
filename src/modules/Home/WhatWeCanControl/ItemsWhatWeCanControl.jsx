import { useSelector } from "react-redux"
import curtainsImage from "../../../shared/Home/whatWeControl/Curtains.png"
import openingDoorsAndWindowsImage from "../../../shared/Home/whatWeControl/Doors.png"
import movementOfTheTerritoryImage from "../../../shared/Home/whatWeControl/Movement.png"
import multiroomSystemImage from "../../../shared/Home/whatWeControl/Multiroom.png"
import otherFunctionsImage from "../../../shared/Home/whatWeControl/Other.png"
import climateImage from "../../../shared/Home/whatWeControl/climpte.png"
import heatingImage from "../../../shared/Home/whatWeControl/heating.png"
import lightingImage from "../../../shared/Home/whatWeControl/lighting.png"
import securityImage from "../../../shared/Home/whatWeControl/security.png"
import waterImage from "../../../shared/Home/whatWeControl/water.png"


export default function ItemsWhatWeCanControl() {
    const {
        security,
        curtains,
        climate,
        movementOfTheTerritory,
        water,
        multiroomSystem,
        heating,
        lighting,
        openingDoorsAndWindows,
        otherFunctions
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="grid md:grid-cols-5 md:grid-rows-3 grid-cols-2 grid-rows-6 gap-4">
            <div className="bg-[#C2DAFF] rounded-lg relative overflow-hidden h-52">
                <p className="text-white text-lg font-semibold absolute top-8 text-center w-full ">
                    {security}
                </p>
                <img src={securityImage} className="absolute bottom-0 top-2" />
            </div>
            <div className="md:row-span-2 md:col-span-1 col-span-2 bg-[#A2C3E2] rounded-lg relative">
                <p className="text-white text-lg font-semibold absolute md:left-0 left-4 top-14 md:text-center md:w-full">
                    {curtains}
                </p>
                <img src={curtainsImage} className="absolute bottom-0 right-0 md:h-auto h-full" />
            </div>
            <div className="bg-[#2A5AB2] rounded-lg relative">
                <p className="text-white text-lg font-semibold absolute top-1/3 z-20 text-center w-full">
                    {climate}
                </p>
                <img src={climateImage} className="absolute bottom-0 right-0" />
            </div>
            <div className="col-span-2 bg-[#6C6AE0] rounded-lg relative overflow-hidden">
                <p className="h-full flex items-center text-white text-xl font-semibold pl-4">
                    {movementOfTheTerritory}
                </p>
                <img src={movementOfTheTerritoryImage} className="absolute top-4 right-0 z-20" />
            </div>
            <div className="bg-[#4B74BC] rounded-lg relative col-start-2 row-start-1 md:row-start-auto md:col-start-auto">
                <p className="h-full flex items-center text-white text-xl font-semibold pl-4">
                    {water}
                </p>
                <img src={waterImage} className="absolute bottom-0 right-0 z-20" />
            </div>
            <div className="row-span-2 bg-[#C3BAE6] rounded-lg relative flex justify-center">
                <p className="text-white text-xl font-semibold absolute top-8">
                    {multiroomSystem}
                </p>
                <img src={multiroomSystemImage} className="absolute bottom-0 " />
            </div>
            <div className="bg-[#3C71D7] rounded-lg relative">
                <p className="absolute top-8 left-4 text-white text-xl font-semibold">
                    {heating}
                </p>
                <img src={heatingImage} className="absolute bottom-0 right-0" />
            </div>
            <div className="bg-[#58B3DA] rounded-lg relative">
                <p className="w-full text-center absolute top-8 left-4 text-white text-xl font-semibold">
                    {lighting}
                </p>
                <img src={lightingImage} className="absolute bottom-0" />
            </div>
            <div className="col-span-2 bg-[#54A5C0] rounded-lg relative h-56">
                <p className="text-white text-xl font-semibold h-full flex items-center pl-8">
                    {openingDoorsAndWindows}
                </p>
                <img src={openingDoorsAndWindowsImage} className="absolute right-0 z-20 bottom-8" />
            </div>
            <div className="md:col-span-2 col-span-1 col-start-2 row-start-3 md:row-start-auto md:col-start-auto bg-[#79CBC6] rounded-lg relative h-52 ">
                <p className="text-white text-xl font-semibold text-center w-full h-full  flex justify-center items-center">
                    {otherFunctions}
                </p>
                <img src={otherFunctionsImage} className="absolute bottom-0 z-20" />
            </div>
        </div>
    )
}
