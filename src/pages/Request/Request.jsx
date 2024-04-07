import { DatePicker } from '@mantine/dates';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import "../../styles/style.css";

export default function Request() {
    const {
        installationService,
        msgRequest,
        selectDateAndTime,
        requestToBook
    } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)
    const [value, setValue] = useState([]);

    return (
        <>
            <Header />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
                className="container mx-auto py-12 flex flex-col md:flex-row gap-4"
            >
                <div className="flex-1 flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-medium">
                            {installationService}
                        </h1>
                        <p className="text-light text-sm">
                            {msgRequest}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <input type="date" placeholder={selectDateAndTime} className="w-fit" />
                        {/* <DateTimePicker
                            // dropdownType="modal"
                            placeholder={selectDateAndTime}
                        /> */}
                        <hr />
                        <Link className='bg-primary text-white w-fit py-2 px-4 uppercase text-xs font-medium flex gap-1 items-center'>
                            {requestToBook}
                            {
                                lang == "en" ?
                                    <IconArrowRight size={20} /> :
                                    <IconArrowLeft size={20} />
                            }
                        </Link>
                    </div>
                </div>
                <div
                    className='flex-1'
                >
                    <DatePicker type="multiple" value={value} onChange={setValue} />
                </div>
            </div>
            <Footer />
        </>
    )
}
