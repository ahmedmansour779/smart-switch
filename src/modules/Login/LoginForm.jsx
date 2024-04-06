import { useSelector } from "react-redux";
import InputEmailAndPassword from "../../components/Form/InputEmailAndPassword";

export default function LoginForm() {
    const {
        helloAgain,
        welcomeBack,
        login,
        forgotPassword
    } = useSelector((state) => state.translations.translations)
    const onSubmitHandel = (e) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={(e) => onSubmitHandel(e)}
            className="h-lvh flex flex-col justify-center items-center md:flex-1 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-medium">
                        {helloAgain}
                    </h1>
                    <p>
                        {welcomeBack}
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <InputEmailAndPassword />
                    <input
                        className="py-3 w-full bg-primary text-white rounded-md text-sm hover:cursor-pointer"
                        type="submit"
                        value={login} />
                    <p className="text-sm text-light text-center  hover:cursor-pointer">
                        {forgotPassword}
                    </p>
                </div>
            </div>
        </form>
    )
}
