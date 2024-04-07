import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import CartTotal from "../../modules/Cart/CartTotal";
import ShoppingCartSection from "../../modules/Cart/ShoppingCartSection";

export default function Cart() {
    const lang = useSelector((state) => state.translations.language)

    return (
        <>
            <Header />
            <div
                style={{
                    direction: lang == "en" ? "ltr" : "rtl"
                }}
                className="container mx-auto py-16 flex flex-col md:flex-row gap-4"
            >
                <ShoppingCartSection />
                <CartTotal />
            </div>
            <Footer />
        </>
    )
}
