import "./header.css";

function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <p className="pizza">🍕</p>
                <ul className="header-menu">
                    <li className="header-menu-item">Restaurants</li>
                    <li className="header-menu-item"> Recipes</li>
                    <li className="header-menu-item">About</li>
                    <li className="header-menu-item">Page</li>
                </ul>
            </div>

            <div className="header-right">
                <p className="header-login">Login</p>
                <button className="header-button">Sign Up</button>
            </div>
        </div>
    );
}

export default Header;
