import { useSelector } from "react-redux"
import SloganForm from "../../components/Form/SloganForm"
import Header from "../../components/Header"
import LoginForm from "../../modules/Login/LoginForm"

export default function LogIn() {
    const lang = useSelector((state) => state.translations.language)
    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
        >
            <div className="sm:hidden">
                <Header />
            </div>
            <div className="flex">
                <SloganForm />
                <LoginForm />
            </div>
        </div>
    )
}
