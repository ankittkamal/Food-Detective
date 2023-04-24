import { useState, useContext } from "react";
import Logo from "../assets/img/Food_Detective.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg text-base ">
      <div className="logo container">
        <Link to="/">
          <img className="h-28 p-2" src={Logo} />
        </Link>
      </div>
      <div className="nav-items justify-between">
        <ul className="flex py-10 ">
          <li className="px-2 ">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2 ">
            <Link to="/About">AboutUs</Link>
          </li>

          <li className="px-2 ">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2 ">
            <Link to="/FoodMart"> FoodMart</Link>
          </li>
          <li className=" px-2">
            <Link to="/Cart">Cart </Link>
          </li>
        </ul>
      </div>
      {/* { <h2>{isOnline ? "🟢" : "🔴"}</h2> } */}

      {/* {{user.name}
      {user.email}} */}

      {isLoggedIn ? (
        <button
          className="flex py-10 pr-5 "
          onClick={() => setisLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button className="flex py-10 pr-5" onClick={() => setisLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
