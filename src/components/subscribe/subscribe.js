import "./subscribe.css";

function Subscribe() {
    return (
        <div className="subscribe-container">
            <div className="subscribe-text">
                <p className="subscribe-bold-text">Subscribe our newsletter</p>
                <p className="subscribe-normal-text">
                    Browse local restaurants and businesses for delivery by
                    entering your address blow.
                </p>
            </div>
            <div className="subscribe-input-button">
                <input
                    type="text"
                    className="subscribe-input"
                    placeholder="Enter your email address..."
                />
                <button className="subscribe-button">
                    <span>Send</span>
                </button>
            </div>
        </div>
    );
}

export default Subscribe;
