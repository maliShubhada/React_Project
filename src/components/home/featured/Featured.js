import React from "react";
import "./featured.css";
import FeaturedCard from "./FeaturedCard";
import Heading from "../../common/Heading";
export const Featured = () => {
  return (
    <div>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Featured Property types"
            subtitle="Find All Type of Property"
          />
          <FeaturedCard />
        </div>
      </section>
    </div>
  );
};

export default Featured;
