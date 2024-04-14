import { IconBox, IconCreditCard, IconHeadphones, IconTrophy } from "@tabler/icons-react";
import { useSelector } from "react-redux";

export default function FourMassages() {
    const {
        titleMassageOne,
        desMassageOne,
        titleMassageTwo,
        desMassageTwo,
        titleMassageThree,
        desMassageThree,
        titleMassageFour,
        desMassageFour
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)
    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className="container mx-auto flex flex-wrap md:flex-nowrap gap-4 w-full md:border border-solid border-gray-200 p-6 rounded-md justify-between"
        >
            <div className="flex gap-2 items-center md:border-none md:w-fit w-full p-4 border border-solid border-gray-200 rounded-lg">
                <IconBox size={40} />
                <div>
                    <p className="text-lg">
                        {titleMassageOne}
                    </p>
                    <p className="text-sm font-light">
                        {desMassageOne}
                    </p>
                </div>
            </div>
            <div className="flex gap-2 items-center md:border-l-[1px] md:border-r-[0px] md:border-t-[0px] md:border-b-[0px] border border-solid border-gray-200 md:pl-8 p-4 md:w-fit w-full rounded-lg">
                <IconTrophy size={40} />
                <div>
                    <p className="text-lg">
                        {titleMassageTwo}
                    </p>
                    <p className="text-sm font-light">
                        {desMassageTwo}
                    </p>
                </div>
            </div>
            <div className="flex gap-2 items-center md:border-l-[1px] md:border-r-[0px] md:border-t-[0px] md:border-b-[0px] border border-solid border-gray-200 md:pl-8 p-4 md:w-fit w-full rounded-lg ">
                <IconCreditCard size={40} />
                <div>
                    <p className="text-lg">
                        {titleMassageThree}
                    </p>
                    <p className="text-sm font-light">
                        {desMassageThree}
                    </p>
                </div>
            </div>
            <div className="flex gap-2 items-center md:border-l-[1px] md:border-r-[0px] md:border-t-[0px] md:border-b-[0px] border border-solid border-gray-200 md:pl-8 p-4 md:w-fit w-full rounded-lg ">
                <IconHeadphones size={40} />
                <div>
                    <p className="text-lg">
                        {titleMassageFour}
                    </p>
                    <p className="text-sm font-light">
                        {desMassageFour}
                    </p>
                </div>
            </div>
        </div>
    )
}
