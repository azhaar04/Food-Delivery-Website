import FoodCard from "./common/food-card/food-card";
import OrderCard from "./common/order-card/order-card";

import invertedComma from "../../assets/double-inverted-comma.png";
import closingInvertedComma from "../../assets/Vector (4).png";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import bike from "../../assets/bike.JPG";

import "./main-section.css";

function MainSection() {
    return (
        <div className="main-section-container">
            <div className="food-item-container">
                <div className="food-item-up">
                    <FoodCard foodImage={"🍔"} foodName={"Burger"} />
                    <FoodCard foodImage={"🍕"} foodName={"Pizza"} />
                    <FoodCard foodImage={"🍣"} foodName={"Sushi"} />
                </div>
                <div className="bike">
                    <div className="bike-text">
                        <p bike>
                            Find <span className="deals-color">deals</span>,{" "}
                            <span className="delivery-color">
                                free delivery
                            </span>
                            , and more from our restaurant partners.
                        </p>
                    </div>
                    <img className="bike-image" src={bike} alt="bike" />
                </div>
                <div className="food-item-text">
                    <img
                        className="inverted-comma"
                        src={invertedComma}
                        alt="Inverted Comma"
                    />
                    <p className="lorem-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.”
                    </p>
                </div>
                <div className="food-item-bottom">
                    <FoodCard foodImage={"🍝"} foodName={"Pasta"} />
                    <FoodCard foodImage={"🥗"} foodName={"Salad"} />
                    <FoodCard foodImage={"🍰"} foodName={"Desserts"} />
                </div>
            </div>
            <div className="order-container">
                <p className="how-to-order">How To Order?</p>
                <div className="order-card-list">
                    <OrderCard
                        orderImage={"📍"}
                        orderName={"Choose your location"}
                        orderNumber={"01"}
                    />
                    <OrderCard
                        orderImage={"🙇🏻‍♂️"}
                        orderName={"Choose what to eat"}
                        orderNumber={"02"}
                    />
                    <OrderCard
                        orderImage={"🍔"}
                        orderName={"May your first order"}
                        orderNumber={"03"}
                    />
                    <OrderCard
                        orderImage={"🏠"}
                        orderName={"Now! Your food in way"}
                        orderNumber={"04"}
                    />
                </div>
            </div>
            <div className="feedback-container">
                <div className="feedback-header">
                    <p className="feedback-main-header">Our Clients Feedback</p>
                    <p className="feedback-header-detals">
                        The food at your doorstep. Why starve when you have us.
                        You hunger partner. Straight out of the oven to your
                        doorstep.
                    </p>
                </div>
                <img
                    className="closing-inverted-comma"
                    src={closingInvertedComma}
                    alt="Closing Inverted Comma"
                />
                <p className="feedback-lorem">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi”
                </p>
                <div className="ceo">
                    <p className="ceo-name">Mitchell Marsh</p>
                    <p className="ceo-company">CEO, Bexon Agency</p>
                </div>

                <div className="arrow">
                    <div className="arrow-left">
                        <img
                            className="arrow-image"
                            src={arrowLeft}
                            alt="Arrow Left"
                        />
                    </div>
                    <div className="arrow-right">
                        <img
                            className="arrow-image"
                            src={arrowRight}
                            alt="Arrow Right"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
