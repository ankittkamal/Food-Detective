import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resid } = useParams();

  const [restaurants, resmenu] = useRestaurant(resid); // CUSTOM HOOK

  const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h2>Res-ID: {resid}</h2>
        <h3> {name}</h3>
        <img className="item-img" src={CDN_URL + cloudinaryImageId}></img>
        <h4>{city}</h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating} stars</h4>
      </div>
      <div className="res-menu">
        <h3>
          {""}
          Menu
          {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (card) => {
              return (
                <li key={card?.card?.info.id}>{card?.card?.info?.name} </li>
              );
            }
          )}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
