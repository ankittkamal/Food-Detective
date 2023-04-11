import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Normal js variable
  // state vriable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
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
      <div className="Restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
