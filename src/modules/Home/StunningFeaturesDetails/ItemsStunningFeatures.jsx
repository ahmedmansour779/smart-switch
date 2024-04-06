import { IconBaselineDensityMedium, IconBatteryCharging, IconCamera, IconPhoto, IconPropeller, IconWifi } from "@tabler/icons-react";
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
        msgWirelessConnect
    } = useSelector((state) => state.translations.translations)
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-4">
            <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
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
