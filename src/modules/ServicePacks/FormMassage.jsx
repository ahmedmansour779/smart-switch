import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useSelector } from "react-redux";

export default function FormMassage() {
    const {
        titleFormMassage,
        msgFormMassage,
        subject,
        message,
        emailAddress,
        sendMessage
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)

    return (
        <div className="flex-1 md:mt-8 py-8 bg-[#FBF4CE] h-fit">
            <form className="px-8 flex flex-col gap-2">
                <h1 className="font-medium text-lg">
                    {titleFormMassage}
                </h1>
                <p className="text-light text-sm">
                    {msgFormMassage}
                </p>
                <div className="flex flex-col gap-2">
                    <input className="p-2 bg-white border border-solid border-[#F7E99E]" type="email" placeholder={emailAddress} />
                    <input className="p-2 bg-white border border-solid border-[#F7E99E]" type="text" placeholder={subject} />
                    <textarea className="p-2 bg-white border border-solid border-[#F7E99E]" placeholder={message} />
                </div>
                <button className="px-4 py-2 rounded-md bg-primary text-white w-fit flex items-center gap-1 uppercase font-medium text-sm" type="submit" >
                    {sendMessage}
                    {
                        lang == "en" ?
                            <IconArrowRight size={20} /> :
                            <IconArrowLeft size={20} />
                    }
                </button>
            </form>
        </div>
    )
}
