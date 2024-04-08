export default function PriceAndOffer() {
    return (
        <div className="flex gap-2 items-center">
            <p className="text-primary font-medium text-lg">$1699</p>
            <p className="text-light line-through">$1999.00</p>
            <p className="bg-[#EFD33D] py-1 px-2 font-medium rounded-md">21% OFF</p>
        </div>
    )
}
