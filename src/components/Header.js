import { useState } from "react";
import Logo from "../assets/img/Food_Detective.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg text-base font-semibold leading-7 text-gray-900">
      <div className="logo container">
        <img className="h-28 p-2" src={Logo} />
      </div>
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2 ">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/About">AboutUs</Link>
          </li>

          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/InstaMart"> InstaMart</Link>
          </li>
          <li className="px-2">
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="flex py-10" onClick={() => setisLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="flex py-10 pr-3" onClick={() => setisLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
