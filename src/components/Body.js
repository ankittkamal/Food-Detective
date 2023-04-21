import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, listOfFilteredRestaurants) {
  const filterSearchData = listOfFilteredRestaurants.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterSearchData;
}

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  //Conditional rendering
  // if restaurant is empty then we load using shimmer UI
  //if res has data than load actual data UI

  //early return no render
  if (!allRestaurants) return null;

  // if (listOfFilteredRestaurants?.length === 0)
  //   return <h1>No restaurant match found</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="dynamic-ui">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              // e.target.value -> whatever you write in input.
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={(e) => {
              //filter data
              const data = filterData(searchInput, allRestaurants);
              // update the state
              setListOfFilteredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic
              const filteredList = listOfFilteredRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfFilteredRestaurant(filteredList);
            }}
          >
            Top Ratad Restaurant
          </button>
        </div>
      </div>
      <div className="Restaurant-container">
        {listOfFilteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/Restaurant/" + restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
