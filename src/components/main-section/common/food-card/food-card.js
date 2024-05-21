import "./food-card.css";
function FoodCard({ foodImage, foodName }) {
    return (
        <div className="food-card">
            <div className="ellipse">
                <span className="food-img">{foodImage}</span>
            </div>
            <p className="food-name">{foodName}</p>
        </div>
    );
}

export default FoodCard;
