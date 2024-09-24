import categoryIcon from "../assets/images/Home-icon.svg.png";
import musicIcon from "../assets/images/Simple_Music.svg.png";
import hamburgerIcon from "../assets/images/Hamburger_icon.svg.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <Link to={"/"} class="btn-category">
                    <img src={categoryIcon} alt="menu button" />
                </Link>
            </div>
                <div class="gofra">
                <Link to="/post/1" class="btn-category">
                    <img src={musicIcon} alt="music button" />
                </Link>
            </div>
                <div class="box">
                    <Link to={"/categories"} class="btn-category">
                        <img src={hamburgerIcon} alt="category button" />
                    </Link>
            </div>
        </footer>
    );
}

export default Footer;