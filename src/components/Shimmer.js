const Shimmer = () => {
  return (
    <div className="Restaurant-container">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="Shimmer-Card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
