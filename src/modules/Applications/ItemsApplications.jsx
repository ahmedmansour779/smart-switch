import { IconEye, IconHeart, IconShoppingCart, IconStar, IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemsApplications() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
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
                            className="border border-solid border-[#E4E7E9] rounded-md p-8 flex flex-col gap-8 items-center relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-44" />
                            <div className="absolute h-44 w-full bg-[#cccccc7d] flex items-center justify-center opacity-0 hover:opacity-100 transition  ease-in-out">
                                <div className="flex gap-2">
                                    <div className="bg-white rounded-full p-2 hover:bg-primary hover:text-white">
                                        <IconHeart />
                                    </div>
                                    <Link to={`/applications/${item.id}`} className="bg-white rounded-full p-2 hover:bg-primary hover:text-white">
                                        <IconShoppingCart />
                                    </Link>
                                    <div className="bg-white rounded-full p-2 hover:bg-primary hover:text-white">
                                        <IconEye />
                                    </div>
                                </div>
                            </div>
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
        </div>
    )
}
