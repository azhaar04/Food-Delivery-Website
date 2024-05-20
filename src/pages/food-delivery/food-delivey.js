import Header from "../../components/header/header";
import HeroSection from "../../components/hero-section/hero-section";
import Dishes from "../../components/dishes/dishes";
import Subscribe from "../../components/subscribe/subscribe";

function FoodDelivery() {
    return (
        <div className="food-delivery-container">
            <Header />
            <HeroSection />
            <Dishes />
            <Subscribe />
        </div>
    );
}

export default FoodDelivery;
