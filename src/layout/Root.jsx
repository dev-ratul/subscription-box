import React from "react";
import Header from "../Component/Header";
import OfferSlider from "../Component/OfferSlider";
import Footer from "../Component/Footer";
import ClubNews from "../pages/ClubNews";



const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        
      </header>
      <main>
        <OfferSlider></OfferSlider>
        <ClubNews></ClubNews>
       
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
