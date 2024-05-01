import React, { useState } from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
