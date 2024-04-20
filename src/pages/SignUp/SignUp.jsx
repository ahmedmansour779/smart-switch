import { useSelector } from "react-redux"
import SloganForm from "../../components/Form/SloganForm"
import SignUpForm from "../../modules/SignUp/SignUpForm"

export default function SignUp() {
    const lang = useSelector((state) => state.translations.language)

    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
        >
            <div className="flex md:flex-row flex-col">
                <SloganForm />
                <SignUpForm />
            </div>
        </div>
    )
}
