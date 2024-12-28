import {Link} from "react-scroll";
import {toggleTheme} from "../store/theme/themeSlice.js";
import {useDispatch} from "react-redux";

const Header = ({menuOpen, setMenuOpen, kaplyaImg}) => {
    const dispatch = useDispatch()
    return (
        <>
            <header className="header">
                <nav className="header-nav container">
                    <h1 className="logo">Мое портфолио</h1>
                    <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </button>
                    <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                        <li><Link to="about" smooth={true} duration={700} className="nav-link">Обо мне</Link></li>
                        <li><Link to="works" smooth={true} duration={700} className="nav-link">Работы</Link></li>
                        <li><Link to="contact" smooth={true} duration={700} className="nav-link">Контакты</Link>
                        </li>
                        <img
                            className='kaplya'
                            src={kaplyaImg}
                            alt=""
                            onClick={() => dispatch(toggleTheme())}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;