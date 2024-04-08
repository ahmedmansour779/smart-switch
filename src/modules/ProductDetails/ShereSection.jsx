import { IconBrandFacebook, IconBrandPinterest, IconBrandTwitter, IconCopy } from "@tabler/icons-react"
import image from "../../shared/prands.png"

export default function ShareSection() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
                <p>Share product:</p>
                <div className="flex">
                    <IconCopy size={20} />
                    <IconBrandFacebook size={20} />
                    <IconBrandTwitter size={20} />
                    <IconBrandPinterest size={20} />
                </div>
            </div>
            <div className="p-2 border border-solid border-[#E4E7E9] flex flex-col gap-2">
                <p>100% Guarantee Safe Checkout</p>
                <img src={image} className="h-8 w-fit" />
            </div>
        </div>
    )
}
