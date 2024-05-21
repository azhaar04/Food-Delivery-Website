import appleLogo from "../../assets/apple-logo.png";
import playStoreLogo from "../../assets/play-store-logo.png";

import "./footer.css";
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-initial">
                <span className="footer-pizza">🍕</span>
                <p className="footer-copyright">
                    © 2023 pizza.All right reserved
                </p>
            </div>
            <div className="footer-download">
                <div className="footer-apple">
                    <img
                        className="footer-logo"
                        src={appleLogo}
                        alt="Apple Logo"
                    />
                    <div className="footer-download-text">
                        <span className="footer-download-text-normal">
                            Download on the
                        </span>
                        <span className="footer-download-text-bold">
                            App Store
                        </span>
                    </div>
                </div>

                <div className="footer-play-store">
                    <img
                        className="footer-logo"
                        src={playStoreLogo}
                        alt="Apple Logo"
                    />
                    <div className="footer-download-text">
                        <span className="footer-download-text-normal">
                            Get it on
                        </span>
                        <span className="footer-download-text-bold">
                            Google Play
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer-list">
                <ul className="footer-list-header">
                    <li className="quick-links">
                        <span className="quick-links-header">Quick Links</span>
                        <ul className="quick-links-list-item">
                            <li>Features</li>
                            <li>Food Menu</li>
                            <li>Offer</li>
                            <li>Review</li>
                            <li>Rider</li>
                        </ul>
                    </li>

                    <li className="get-to-know">
                        <span className="get-to-know-header">
                            Get to Know Us
                        </span>
                        <ul className="get-to-know-list-item">
                            <li>Gift Cards</li>
                            <li>DoorDash Stories</li>
                            <li>LinkedIn</li>
                            <li>Glassdoor</li>
                            <li>Accessibility</li>
                        </ul>
                    </li>
                    <li className="news">
                        <span className="news-header">News</span>
                        <ul className="news-list-item">
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Lift Media </li>
                            <li>Press</li>
                            <li>Presse kit</li>
                        </ul>
                    </li>
                    <li className="contact">
                        <span className="contact-header">Contact</span>
                        <ul className="contact-list-item">
                            <li>WhatsApp</li>
                            <li>Support 24</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <ul className="privacy-list">
                <li>Privacy </li>
                <li>Policy</li>
                <li>Terms</li>
                <li> Servicess</li>
            </ul>
        </div>
    );
}

export default Footer;
