import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" border border-black m-2 p-2">
      <h3 className=" font-semibold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className=" cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className=" cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p> {description} </p>}
    </div>
  );
};

const FoodMart = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl m-2 p-2 font-semibold">FoodMart </h1>
      <Section
        title={"About Food Mart"}
        description={"This is the About section of Food Mart. "}
      />
      <Section
        title={"Teams FoodMart"}
        description={"This is the team of Food Mart. Join our team"}
      />
      <Section
        title={"Location FoodMart Store"}
        description={"This is the store location of Food Mart. Add your store"}
      />
    </div>
  );
};

export default FoodMart;
