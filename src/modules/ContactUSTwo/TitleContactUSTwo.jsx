import { IconSearch } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import image from "../../shared/contactUs.jpeg"

export default function TitleContactUSTwo() {
    const {
        helpCenter,
        msgHelpCenter,
        msgSearch,
        search
    } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex justify-between container mx-auto py-12">
            <div className="flex flex-col gap-2 md:pt-16 pt-0">
                <h1 className="bg-[#EFD33D] py-2 px-4 w-fit text-sm font-medium flex justify-center items-center">{helpCenter}</h1>
                <p className="text-2xl font-medium">{msgHelpCenter}</p>
                <form className="border border-solid border-[#E4E7E9] rounded-md p-2 flex gap-2 items-center justify-center">
                    <IconSearch color="#3AA3DB" size={20} />
                    <input type="text" placeholder={msgSearch} className="text-sm" />
                    <button type="submit" className="bg-primary text-white px-4 py-2 text-sm rounded-md">{search}</button>
                </form>
            </div>
            <img
                src={image}
                className="h-72 w-fit"
            />
        </div>
    )
}
