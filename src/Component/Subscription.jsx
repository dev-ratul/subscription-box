import React from "react";
import Header from "./Header";
import { Outlet, useLoaderData } from "react-router";
import LeftSite from "./LeftSite";
import ChoiceSubs from "./ChoiceSubs";
import Footer from "./Footer"

const Subscription = () => {
  const data= useLoaderData()
  return (
    <div className="bg-[#101234]">
      <header>
        <Header></Header>
      </header>
      <main className=" lg:w-10/12 mx-auto my-10">
        <ChoiceSubs data={data}></ChoiceSubs>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Subscription;
