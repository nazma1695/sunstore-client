import React from "react";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import Sales from "../Sales/Sales";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ShowReview from "../ShowReview/ShowReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Categories></Categories>
      <Sales></Sales>
      <ShowReview></ShowReview>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
