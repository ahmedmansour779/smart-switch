import { IconBaselineDensityMedium, IconBatteryCharging, IconCamera, IconPhoto, IconPropeller, IconWifi } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ItemsStunningFeatures() {
    const {
        cameraResolution,
        msgCameraResolution,
        healthyBatteryLife,
        msgHealthyBatteryLife,
        amazingExperience,
        msgAmazingExperience,
        highSpeedShooting,
        msgHighSpeedShooting,
        strongControlPanel,
        msgStrongControlPanel,
        wirelessConnect,
        msgWirelessConnect,
        showMore
    } = useSelector((state) => state.translations.translations)
    const [show, setShow] = useState(false)

    return (
        <div className="flex md:flex-row flex-col md:flex-nowrap flex-wrap gap-4 h-full">
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconCamera color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{cameraResolution}</h1>
                        <p className="text-sm text-light">{msgCameraResolution}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconBatteryCharging color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{healthyBatteryLife}</h1>
                        <p className="text-sm text-light">{msgHealthyBatteryLife}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconPhoto color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{amazingExperience}</h1>
                        <p className="text-sm text-light">{msgAmazingExperience}</p>
                    </div>
                </div>
            </div>
            <p
                onClick={() => setShow(true)}
                className={`md:hidden text-primary underline hover:cursor-pointer text-center ${show ? "hidden" : "block"}`}
            >
                {showMore}
            </p>
            <div className={`md:flex flex-col gap-8 ${show ? "flex" : "hidden"}`}>
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconPropeller color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{highSpeedShooting}</h1>
                        <p className="text-sm text-light">{msgHighSpeedShooting}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconBaselineDensityMedium color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{strongControlPanel}</h1>
                        <p className="text-sm text-light">{msgStrongControlPanel}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full">
                        <IconWifi color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-lg font-medium">{wirelessConnect}</h1>
                        <p className="text-sm text-light">{msgWirelessConnect}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
