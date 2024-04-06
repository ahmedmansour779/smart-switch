import { useSelector } from "react-redux";
import InputEmailAndPassword from "../../components/Form/InputEmailAndPassword";

export default function SignUpForm() {
    const {
        hello,
        msgSignUp,
        fullName,
        register
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
                        {hello}
                    </h1>
                    <p>
                        {msgSignUp}
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder={fullName}
                        className="px-4 py-2 bg-transparent border border-solid border-[#EEEEEE] rounded-3xl"
                    />
                    <InputEmailAndPassword />
                    <input
                        className="py-3 w-full bg-primary text-white rounded-md text-sm hover:cursor-pointer"
                        type="submit"
                        value={register} />
                </div>
            </div>
        </form>
    )
}
