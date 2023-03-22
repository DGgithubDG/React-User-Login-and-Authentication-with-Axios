import React from "react";
import { AuthProvider } from "../../context/AuthProvider";
import Login from "./login";

const Home = () => {
  return(
    <>
<Login />
<AuthProvider />
</>
  )}
export default Home;