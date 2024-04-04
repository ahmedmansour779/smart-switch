import { useSelector } from "react-redux"
import { ourClientData } from "../../../data/ourClient"

export default function OurClient() {
    const { ourClients } = useSelector((state) => state.translations.translations)
    return (
        <div className="flex flex-col gap-8 items-center py-12">
            <h1 className="text-4xl font-medium">
                {ourClients}
            </h1>
            <div className="flex gap-4 md:flex-row flex-col">
                {
                    ourClientData.map((item, index) => {
                        return (
                            <img className="w-fit" src={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
