import Links from "../../modules/Header/Links/Links";
import Register from "../../modules/Header/Register/Register";
import SideParHeader from "../../modules/Header/SideParHeader";
import Slogan from "../../modules/Header/Slogan/Slogan";

export default function Header() {
    return (
        <div className="bg-[#F7F7F7] font-primary">
            <div className="bg-primary rounded-b-full px-8">
                <div className="flex justify-between items-center container mx-auto py-6">
                    <Slogan />
                    <Links />
                    <Register />
                    <SideParHeader />
                </div>
            </div>
        </div>
    )
}
