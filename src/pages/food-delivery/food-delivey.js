import Header from "../../components/header/header";
import HeroSection from "../../components/hero-section/hero-section";
import Dishes from "../../components/dishes/dishes";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";

function FoodDelivery() {
    return (
        <div className="food-delivery-container">
            <Header />
            <HeroSection />
            <Dishes />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default FoodDelivery;
