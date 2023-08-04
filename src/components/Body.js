import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  //Normal js variable
  // state vriable
  //Recct hooks , state, useState
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect takes two parameter callback function and dependency array
  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    const restaurantData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restaurantData);
    setListOfFilteredRestaurant(restaurantData);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setListOfFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional rendering
  // if restaurant is empty then we load using shimmer UI
  //if res has data than load actual data UI
  //early return no render
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>‼️ You are offline, Please connect to internet 🌎 </h1>;
  }
  if (!allRestaurants) return null;

  // if (listOfFilteredRestaurants?.length === 0)
  //   return <h1>No restaurant match found</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="dynamic-ui flex justify-between ">
        <div className="search-container m-2 p-4 bg-slate-100 my-2 flex justify-start rounded-xl ">
          <input
            type="text"
            className="search-input rounded-xl p-2 m-1"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              // e.target.value -> whatever you write in input.
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="m-2 p-1 hover:bg-gray-200 bg-white  rounded-2xl"
            onClick={(e) => {
              //filter data
              // const data = filterData(searchInput, allRestaurants);
              // // update the state
              // setListOfFilteredRestaurant(data);
              const listOfFilteredRestaurants = allRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
              setListOfFilteredRestaurant(listOfFilteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter p-5 flex justify-end">
          <button
            className="filter-btn bg-red-300 m-2 p-2 rounded-xl"
            onClick={() => {
              //filter logic
              const filteredList = listOfFilteredRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfFilteredRestaurant(filteredList);
            }}
          >
            Top Ratad Restaurant
          </button>
        </div>
      </div>
      <div className="Restaurant-container flex flex-wrap">
        {listOfFilteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/Restaurant/" + restaurant?.info?.id}>
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
