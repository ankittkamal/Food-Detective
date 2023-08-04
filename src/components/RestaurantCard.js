import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // destructuring data
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card w-56 p-2 m-2 shadow-lg bg-slate-100">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-xl:">{name}</h3>
      <h5 className=" text-sm font-extralight "> {cuisines.join(", ")}</h5>

      <ul className="flex p-1">
        <li className="  text-sm font-light m-1">✩ {avgRating} stars</li>
        <li className=" text-sm font-light m-1  ">{costForTwo} For Two</li>
        <li className=" text-sm font-light m-1">{sla?.deliveryTime} MINS</li>
      </ul>
    </div>
  );
};
export default RestaurantCard;
// {sla?.deliveryTime}
