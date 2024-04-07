import { IconMessageCircle, IconPhoneCall } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function ContentContactUsTwo() {
    const {
        msgContactUsOne,
        msgContactUsTwo,
        callUsNow,
        msgCallUsNow,
        callNow,
        chatWithUs,
        contactUs
    } = useSelector((state) => state.translations.translations)

    return (
        <div
            className="py-16 bg-[#F2F4F5] flex flex-col gap-8">
            <div className="flex flex-col gap-2 items-center w-full">
                <Link to="/contactUs" className="bg-primary text-white py-2 px-4 rounded-md uppercase font-medium text-sm">
                    {contactUs}
                </Link>
                <p className="font-medium text-2xl">
                    {msgContactUsOne}
                </p>
                <p className="font-medium text-2xl">
                    {msgContactUsTwo}
                </p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-center w-full">
                <div className="flex gap-4 p-4 bg-white rounded-md">
                    <div className="p-4 rounded-md bg-[#EAF6FE] h-fit">
                        <IconPhoneCall color="#2DA5F3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-medium">
                            {callUsNow}
                        </h1>
                        <p className="text-sm text-light">
                            {msgCallUsNow}
                        </p>
                        <p className="font-medium">
                            +1-202-555-0126
                        </p>
                        <Link to="/" className="bg-primary text-white py-2 px-4 rounded-sm w-fit uppercase font-medium">
                            {callNow}
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-md">
                    <div className="p-4 rounded-md bg-[#EAF7E9] h-fit">
                        <IconMessageCircle color="#2DB224" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-medium">
                            {chatWithUs}
                        </h1>
                        <p className="text-sm text-light">
                            {msgCallUsNow}
                        </p>
                        <p className="font-medium">
                            Support@Smart.com
                        </p>
                        <Link to="/" className="bg-[#2DB224] text-white py-2 px-4 rounded-sm w-fit uppercase font-medium">
                            {contactUs}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
