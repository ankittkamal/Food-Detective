import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

function filterData(searchInput, listOfRestaurants) {
  const filterSearchData = listOfRestaurants.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterSearchData;
}

const Body = () => {
  //Normal js variable
  // state vriable
  //Recct hooks , state, useState

  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [searchInput, setSearchInput] = useState("");
  // callback function and dependency array
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
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("rendered");
  return (
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
              const data = filterData(searchInput, listOfRestaurants);
              // update the state
              setListOfRestaurant(data);
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
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Ratad Restaurant
          </button>
        </div>
      </div>
      <div className="Restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
