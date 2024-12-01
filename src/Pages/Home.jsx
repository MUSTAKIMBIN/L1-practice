import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
