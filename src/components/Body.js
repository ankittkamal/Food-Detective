import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

function filterData(searchInput, listOfRestaurants) {
  const filterSearchData = listOfRestaurants.filter((rest) =>
    rest.data.name.includes(searchInput)
  );
  return filterSearchData;
}

const Body = () => {
  //Normal js variable
  // state vriable
  //Recct hooks , state, useState

  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [searchInput, setSearchInput] = useState("");

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
