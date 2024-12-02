import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import AllJobs from "../Components/AllJobs";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <AllJobs></AllJobs>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
