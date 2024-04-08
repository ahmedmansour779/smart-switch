import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import ButtonsSectionProductDetails from "../../modules/ProductDetails/ButtonsSectionProductDetails";
import ColorInput from "../../modules/ProductDetails/ColorInput";
import PriceAndOffer from "../../modules/ProductDetails/PriceAndOfer";
import QuantityProductDetails from "../../modules/ProductDetails/QuintityProductDetails";
import ShareSection from "../../modules/ProductDetails/ShereSection";
import TypeProductDetails from "../../modules/ProductDetails/TypeProductDetails";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    let { id } = useParams();
    const lang = useSelector((state) => state.translations.language)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div className="flex flex-col justify-between min-h-lvh">
            <Header />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
                className="container mx-auto py-28 grid grid-cols-1 md:grid-cols-2 gap-8"
            >

                <img
                    src={product.image}
                    alt={product.title} />
                <div className="flex flex-col gap-4">
                    <p className="text-2xl ">
                        {product.title}
                    </p>
                    <TypeProductDetails />
                    <PriceAndOffer />
                    <hr />
                    <QuantityProductDetails />
                    <ColorInput />
                    <ButtonsSectionProductDetails />
                    <ShareSection />
                </div>
            </div>

            <Footer />
        </div>
    )
}
