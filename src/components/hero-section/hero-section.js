import heroImg from "../../assets/hero.png";
import appleLogo from "../../assets/apple-logo.png";
import playStoreLogo from "../../assets/play-store-logo.png";
import "./hero-section.css";

function HeroSection() {
    return (
        <div className="hero-section-containter">
            <div className="hero-left">
                <div className="text-container">
                    <p className="hero-header-text">
                        Your Favorite Food Delivery Partner
                    </p>
                    <p className="hero-paragraph-text">
                        The food at your doorstep. Why starve when you have us.
                        You hunger partner. Straight out of the oven to your
                        doorstep.{" "}
                    </p>
                </div>

                <div className="input-container">
                    <div className="a">
                        <div className="hero-input-button">
                            <input
                                type="text"
                                className="hero-input"
                                placeholder="Enter your delivery location"
                            />
                            <button className="hero-button">
                                <span>Order Now</span>
                            </button>
                        </div>
                        <div className="download">
                            <div className="apple">
                                <img
                                    className="apple-logo"
                                    src={appleLogo}
                                    alt="Apple Logo"
                                />
                                <div className="download-text">
                                    <span className="download-apple">
                                        Download on the
                                    </span>
                                    <span className="bold-app-store">
                                        App Store
                                    </span>
                                </div>
                            </div>

                            <div className="play-store">
                                <img
                                    className="play-store-logo"
                                    src={playStoreLogo}
                                    alt="Apple Logo"
                                />
                                <div className="download-text">
                                    <span className="download-play-store">
                                        Get it on
                                    </span>
                                    <span className="bold-play-store">
                                        Google Play
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img className="hero-img" src={heroImg} alt="Hero" />
            </div>
        </div>
    );
}

export default HeroSection;
