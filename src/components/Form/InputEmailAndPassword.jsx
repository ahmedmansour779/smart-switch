import { useSelector } from "react-redux";

export default function InputEmailAndPassword() {
    const {
        emailAddress,
        password
    } = useSelector((state) => state.translations.translations)
    return (
        <div className="flex flex-col gap-4">
            <input
                required
                type="email"
                name="email"
                placeholder={emailAddress}
                className="px-4 py-2 bg-transparent border border-solid border-[#EEEEEE] rounded-3xl"
            />
            <input
                required
                type="password"
                name="password"
                placeholder={password}
                className="px-4 py-2 bg-transparent border border-solid border-[#EEEEEE] rounded-3xl"
            />
        </div>
    )
}
