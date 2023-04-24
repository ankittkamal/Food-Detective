import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "User Name",
    email: "user Email",
  },
});

export default userContext;
