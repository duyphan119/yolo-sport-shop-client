import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left"></div>
      <div className="header__middle">
        <Link to="/">
          <img
            src="https://i.ibb.co/47TLCT3/logo.webp"
            alt=""
            className="header__middle-img"
          />
        </Link>
      </div>
      <div className="header__right">
        <Link to="/">
          <div className="header__right-icon">
            <FaUserCircle />
          </div>
        </Link>
        <Link to="/">
          <div className="header__right-icon">
            <BsSearch />
          </div>
        </Link>
        <Link to="/">
          <div className="header__right-icon">
            <BsCart3 />
            <span>1</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
