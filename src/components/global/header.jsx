
import '../../styles/components/header.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'

// Header Component

const Header = ({ cartAmount, setCartOpen }) => {

    const triggerShop = () => {
        setCartOpen(true);
    }

    return (
        <header>
            <h2>Remix <span>Hiking Supplies</span></h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <AiOutlineShoppingCart onClick={triggerShop} className="cartIcon" />
                    <aside className="cartAmount">{cartAmount}</aside>
                </li>
            </ul>
        </header>
    )

}

export default Header;





