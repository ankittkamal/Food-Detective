import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/fresh-food-vector-design-logo_518759-168.jpg?w=2000"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wniumg41joijmp5bscis"
      />
      <h3>{props.resName}</h3>
      <h4> {props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4> {props.time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="Restaurant-container">
        <RestaurantCard
          resName="Megna Foods"
          cuisine="Pure Vegetarian Food, Roti, Naan, Dal, Paneer, Chole Chawal"
          rating="4.4 stars"
          time="38 min"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="pizza, burger "
          rating="4.5 stars"
          time="25 min"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
