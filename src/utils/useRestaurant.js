import React from "react";
import { useState, useEffect } from "react";
// CUSTOM HOOK which will fetch the restaurant menu data and send

const useRestaurant = (resid) => {
  const [restaurants, setRestaurants] = useState([{}]);
  const [resmenu, setResMenu] = useState([{}]);
  //Get data from API
  useEffect(() => {
    getRestaurantsID();
  }, []);

  async function getRestaurantsID() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resid +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[0]?.card?.card?.info); //60445
    // console.log(restaurants);
    setResMenu(json?.data?.cards[2]);
    // console.log(resmenu);
  }

  return [restaurants, resmenu];
};

export default useRestaurant;
