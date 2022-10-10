import React from "react";
import { list } from "../../data/Data";
// import './recent.css';
export const RecentCard = () => {
  return (
    <>
      <div className="container grid3 m_top">
        {list.map((value, index) => {
          const { image, category, name, location,price,type } = value;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={image} alt="image for Rent" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category == "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category == "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i>
                  {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                    <button className="btn2">{price}</button>
                    <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RecentCard;
