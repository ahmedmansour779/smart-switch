import { useSelector } from "react-redux"
import SloganForm from "../../components/Form/SloganForm"
import Header from "../../components/Header"
import SignUpForm from "../../modules/SignUp/SignUpForm"

export default function SignUp() {
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
        >
            <div className="sm:hidden fixed w-full">
                <Header />
            </div>
            <div className="flex">
                <SloganForm />
                <SignUpForm />
            </div>
        </div>
    )
}
