import { useSelector } from "react-redux"

export default function TitleContactUs() {
    const {
        headTitleContactUs,
        descTitleContactUs
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex flex-col gap-4 md:flex-1 w-full">
            <h1 className="font-semibold text-3xl">{headTitleContactUs}</h1>
            <p className="text-light text-sm">{descTitleContactUs}</p>
        </div>
    )
}
