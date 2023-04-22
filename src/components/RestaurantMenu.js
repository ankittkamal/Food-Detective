import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [restaurants, resmenu] = useRestaurant(resid); // CUSTOM HOOK which will fetch the restaurant menu data of resid and send

  const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu flex justify-center">
      <div className="flex-wrap w-56 p-2 m-2 shadow-lg bg-gray-50">
        <h3 className="font-bold text-xl"> {name}</h3>
        <img className="item-img" src={CDN_URL + cloudinaryImageId}></img>
        <h4 className=" my-1">Location: {city}</h4>
        <h4 className=" my-1">{costForTwoMessage}</h4>
        <h4 className=" my-1">{avgRating} stars</h4>
      </div>
      <div className="res-menu flex flex-wrap w-56 p-2 m-2 shadow-lg bg-gray-50 justify-center">
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
