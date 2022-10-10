import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./location.css";
export const Location = () => {
  return (
    <div>
      <section className="location padding">
       <div className="container">
       <Heading
          title="Explore By Location"
          subtitle="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua.  Ut enim ad minim veniam."
        />
        <div className="container grid3 m_top">
            {
             location.map((locationVal,index)=>(
                <div className="box" key={index}>
                   <img src={locationVal.image} alt="location Image"/>
                   <div className="overlay">
                    <h5>{locationVal.name}</h5>
                    <p>
                        <label>{locationVal.Villas}</label>
                        <label>{locationVal.Apartments}</label>
                        <label>{locationVal.Offices}</label>
                        </p>
                   </div>
                </div>
             ))
            }
        </div>
       </div>
      </section>
    </div>
  );
};
export default Location;
