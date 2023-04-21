import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is the Food Detective WebApp build using React.js</p>
      <Profile Name={"Ankit Kamal"} />
    </div>
  );
};

export default About;
