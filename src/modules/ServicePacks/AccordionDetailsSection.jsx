import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { useSelector } from "react-redux";

export default function AccordionDetailsSection() {
    const {
        serviceDiscription,
        msgServiceDiscription,
        itemOneServiceDiscription,
        itemTwoServiceDiscription,
        itemThreeServiceDiscription,
        itemFourServiceDiscription,
        cancellationPolicy,
        contactDetails
    } = useSelector((state) => state.translations.translations)
    const [show, setShow] = useState(1)

    return (
        <div className='flex-[2] py-8 border-t-[1px] border-solid border-[#E4E7E9] flex flex-col gap-4'>
            <div className={`rounded-md ${show == 1 && "shadow-lg"}`}>
                <div
                    className={`p-4 flex justify-between font-medium text-lg ${show == 1 ? "bg-primary text-white" : "border border-solid border-[#E4E7E9]"} rounded-md `}
                    onClick={() => setShow(1)}>
                    <p>
                        {serviceDiscription}
                    </p>
                    {
                        show == 1 ?
                            <IconMinus /> :
                            <IconPlus />
                    }
                </div>
                {
                    show == 1 &&
                    <div className='p-4 flex flex-col gap-4'>
                        <p>
                            {msgServiceDiscription}
                        </p>
                        <ul className='flex flex-col gap-1 list-disc list-inside'>
                            <li>{itemOneServiceDiscription}</li>
                            <li>{itemTwoServiceDiscription}</li>
                            <li>{itemThreeServiceDiscription}</li>
                            <li>{itemFourServiceDiscription}</li>
                        </ul>
                    </div>
                }
            </div>
            <div className={`rounded-md ${show == 2 && "shadow-lg"}`}>
                <div
                    className={`p-4 flex justify-between font-medium text-lg ${show == 2 ? "bg-primary text-white" : "border border-solid border-[#E4E7E9]"} rounded-md `}
                    onClick={() => setShow(2)}>
                    <p>
                        {cancellationPolicy}
                    </p>
                    {
                        show == 2 ?
                            <IconMinus /> :
                            <IconPlus />
                    }
                </div>
                {
                    show == 2 &&
                    <div className='p-4 flex flex-col gap-4'>
                        <p>
                            {msgServiceDiscription}
                        </p>
                        <ul className='flex flex-col gap-1 list-disc list-inside'>
                            <li>{itemOneServiceDiscription}</li>
                            <li>{itemTwoServiceDiscription}</li>
                            <li>{itemThreeServiceDiscription}</li>
                            <li>{itemFourServiceDiscription}</li>
                        </ul>
                    </div>
                }
            </div>
            <div className={`rounded-md ${show == 3 && "shadow-lg"}`}>
                <div
                    className={`p-4 flex justify-between font-medium text-lg ${show == 3 ? "bg-primary text-white" : "border border-solid border-[#E4E7E9]"} rounded-md `}
                    onClick={() => setShow(3)}>
                    <p>
                        {contactDetails}
                    </p>
                    {
                        show == 3 ?
                            <IconMinus /> :
                            <IconPlus />
                    }
                </div>
                {
                    show == 3 &&
                    <div className='p-4 flex flex-col gap-4'>
                        <p>
                            {msgServiceDiscription}
                        </p>
                        <ul className='flex flex-col gap-1 list-disc list-inside'>
                            <li>{itemOneServiceDiscription}</li>
                            <li>{itemTwoServiceDiscription}</li>
                            <li>{itemThreeServiceDiscription}</li>
                            <li>{itemFourServiceDiscription}</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
