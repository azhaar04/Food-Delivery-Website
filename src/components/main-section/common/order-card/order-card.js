import "./order-card.css";
function OrderCard({ orderImage, orderName, orderNumber }) {
    return (
        <div className="card">
            <span className="order-number">{orderNumber}</span>
            <div className="order-card">
                <div className="rectangle">
                    <span className="order-image">{orderImage}</span>
                </div>
                <p className="order-name">{orderName}</p>
            </div>
        </div>
    );
}

export default OrderCard;
