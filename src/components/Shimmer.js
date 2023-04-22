const Shimmer = () => {
  return (
    <div className="Restaurant-container  flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="Shimmer-Card w-56 p-2 m-2 shadow-lg bg-gray-100 h-64 "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
