import { Link } from "react-router-dom";

export default function Slogan() {
    return (
        <Link to="/" className="flex gap-1 items-center">
            <p
                className="bg-seconder px-3 py-1 flex justify-center items-center rounded-full text-primary font-semibold"
            >
                S
            </p>
            <p className="text-seconder text-lg">
                Smart Switch
            </p>
        </Link>
    )
}
