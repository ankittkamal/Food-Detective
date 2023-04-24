import { useSelector } from "react-redux";
// import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" p-4 m-5 grid grid-rows-3 grid-flow-col gap-4">
      <h1> Add to cart : 🛒</h1>
      <h2>Cart Items: {cartItems.length} </h2>
      {/* <FoodItem FoodItem={cartItems} /> */}
    </div>
  );
};
export default Cart;
