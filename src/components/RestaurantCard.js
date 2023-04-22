import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // destructuring data
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card w-56 p-2 m-2 shadow-lg bg-gray-50">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-xl:">{name}</h3>
      <h5 className=" font-light"> {cuisines.join(", ")}</h5>
      <h5 className=" font-light">{avgRating} stars</h5>
      <h5 className=" font-light">₹{costForTwo / 100} For Two</h5>
      <h5 className=" font-light">Delivery Time: {deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
