import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ItemsApplications() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((item, index) => {
                const star = []
                const emptyStar = []
                for (let i = 0; i < Math.round(item.rating.rate); i++) {
                    star.push(i);
                }
                for (let i = Math.round(item.rating.rate); i < 5; i++) {
                    emptyStar.push(i);
                }
                return (
                    <div
                        key={index}
                        className="border border-solid border-[#E4E7E9] rounded-md p-8 flex flex-col gap-8 items-center">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-44" />
                        <div
                            className="w-full flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {star.map((rate) => {
                                        return (
                                            <IconStarFilled size={15} color="#3AA3DB" key={rate} />
                                        );
                                    })}
                                    {emptyStar.map((rate) => {
                                        return (
                                            <IconStar size={15} color="#3AA3DB" key={rate} />
                                        );
                                    })}
                                </div>
                                <p className="text-sm text-light">
                                    {"("}{item.rating.count}{")"}
                                </p>
                            </div>
                            <p className="font-medium text-lg">
                                {item.title.slice(0, 45) + "..."}
                            </p>
                            <p className="text-primary font-medium">
                                ${item.price}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
