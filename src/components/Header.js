import { useState } from "react";
import Logo from "../assets/img/Food_Detective.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo container">
        <img className="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/InstaMart"> InstaMart</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
