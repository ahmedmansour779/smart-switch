import { useSelector } from "react-redux"

export default function FormContactUs() {
    const {
        step1,
        questionFormContactUs,
        homeOwner,
        interiorDesign,
        business,
        nextStep
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div className="md:flex-1 w-full p-6 pt-12 relative shadow-md rounded-3xl ">
            <div className={`bg-primary h-20 w-20 flex items-center justify-center text-white font-semibold rounded-full shadow-md absolute -top-9 ${lang == "en" ? "md:-left-9 left-4" : "md:-right-9 right-4"}`}>
                {step1}
            </div>
            <form className="flex flex-col gap-8 item-start items-start">
                <h1 className="text-xl font-semibold">{questionFormContactUs}</h1>
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-1 item-center">
                        <input defaultChecked type="radio" name="propertyType" id="homeOwner" />
                        <label htmlFor="homeOwner">{homeOwner}</label>
                    </div>
                    <div className="flex gap-1 item-center">
                        <input type="radio" name="propertyType" id="interiorDesign" />
                        <label htmlFor="interiorDesign">{interiorDesign}</label>
                    </div>
                    <div className="flex gap-1 item-center">
                        <input type="radio" name="propertyType" id="business" />
                        <label htmlFor="business">{business}</label>
                    </div>
                </div>
                <input
                    className="px-12 py-4 bg-primary text-white hover:cursor-pointer" type="submit" value={nextStep} />
            </form>
        </div>
    )
}
