import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [restaurants, resmenu] = useRestaurant(resid); // CUSTOM HOOK which will fetch the restaurant menu data of resid and send

  const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  const dispatch = useDispatch();

  const addFoodItem = (card) => {
    dispatch(addItem(card));
  };

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className=" flex justify-center">
        <div className="flex-wrap max-w-2xl h-auto p-2 m-2 shadow-lg bg-gray-50">
          <h3 className="font-bold text-xl m-2 p-2"> {name}</h3>
          <img
            className="item-img w-56"
            src={CDN_URL + cloudinaryImageId}
          ></img>
          <h4 className=" my-1 p-1">Location: {city}</h4>
          <h4 className=" my-1 p-1">{costForTwoMessage}</h4>
          <h4 className=" my-1 p-1">✩ {avgRating} stars</h4>
        </div>

        <div className="res-menu flex flex-wrap min-w-fit h-auto p-5 m-2 shadow-lg bg-gray-50 justify-center">
          <div>
            <h2 className=" font-bold text-xl"> Menu </h2>
            {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
              (card) => {
                return (
                  <li key={card?.card?.info.id}>
                    {card?.card?.info?.name}{" "}
                    <button
                      className="m-1 p-1 rounded-md bg-zinc-400 "
                      onClick={() => {
                        addFoodItem(card);
                      }}
                    >
                      {" "}
                      ADD+{" "}
                    </button>{" "}
                  </li>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
