import Links from "../../modules/Header/Links/Links";
import Register from "../../modules/Header/Register/Register";
import Slogan from "../../modules/Header/Slogan/Slogan";

export default function Header() {
    return (
        <div className="bg-seconder">
            <div className="bg-primary rounded-b-full">
                <div className="flex justify-between items-center container mx-auto py-6">
                    <Slogan />
                    <Links />
                    <Register />
                </div>
            </div>
        </div>
    )
}
