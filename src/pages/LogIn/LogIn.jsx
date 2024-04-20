import { useSelector } from "react-redux"
import SloganForm from "../../components/Form/SloganForm"
import LoginForm from "../../modules/Login/LoginForm"

export default function LogIn() {
    const lang = useSelector((state) => state.translations.language)
    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
        >

            <div className="flex md:flex-row flex-col">
                <SloganForm />
                <LoginForm />
            </div>
        </div>
    )
}
