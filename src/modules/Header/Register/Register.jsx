import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Register() {
    const { login, signUp } = useSelector((state) => state.translations.translations)

    return (
        <div className="gap-4 hidden md:flex">
            <Link
                to="/login"
                className="bg-seconder text-primary border border-solid border-white py-2 px-4 rounded-2xl">
                {login}
            </Link>
            <Link
                to="/signUp"
                className="bg-primary text-seconder border border-solid border-white py-2 px-4 rounded-2xl">
                {signUp}
            </Link>
        </div>
    )
}
