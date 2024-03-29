import { useSelector } from "react-redux"

export default function Register() {
    const { login, signUp } = useSelector((state) => state.translations.translations)

    return (
        <div className="flex gap-4">
            <div className="bg-seconder text-primary border border-solid border-white py-2 px-4 rounded-2xl">
                {login}
            </div>
            <div className="bg-primary text-seconder border border-solid border-white py-2 px-4 rounded-2xl">
                {signUp}
            </div>
        </div>
    )
}
