import React, { useState } from "react";
import "../../App.css";

function Services() {


  const data=[{
    id:1,
    products:'International Tour Packages',
    features:'More than 500 holiday packages',
    benefits:'	Starting from Rs.8 550.00 only'
},
{
  id:2,
  products:'India Tour Packages',
  features:'	More than 645 packages live on the portal spread across India, Srilanka, Bhutan and Nepal',
  benefits:'Starting from Rs.11 999.00'
},
{
  id:3,
  products:'Cruise Tour Packages',
  features:'	Luxury Cruises Experience',
  benefits:'	Best deals on India & International Cruise Packages'
},
{
  id:4,
  products:'Foreign Exchange',
  features:'Buy, Sell, Reload & Remittance',
  benefits:'	Best Rate, No convenience fee, Security'
},
{
  id:5,
  products:'Flights',
  features:'	Great deals on India & International Flights',
  benefits:'Best prices for One Way & Return Flights'
},

]
  return (
    <>
    <div className="services">
    <div>
         <p className="font-weight-bold text-dark">
          “Travel is the only thing you buy that makes you richer”. We
          completely swear by this and believe in fulfilling travel dreams that
          make you invariably rich by the day. We have been selling beautiful
          experiences for years through our state-of-the-art designed holiday
          packages and other essential travel services. We inspire our customers
          to live a rich life, full of unforgettable travel experiences. Our
          mission is not just to be a travel agency which helps you book a
          holiday; we want to be your travel partner who would go an extra mile
          to help you choose an ideal destination and learn more about the place
          you have been dreaming to visit. Since holidays are more about
          personal choices and interests, we bring to you customizable tour
          packages as well. We give you the prerogative to pick and choose
          anything that matches your interest. No matter how many travel
          experiences we sell every day, we ensure that you are the protagonist
          of your own travel story.
        </p>
      </div>
      <table className="table table-bordered text-center text-white">
        <th>Our Products</th>
        <th>Features</th>
        <th>Benefits</th>
        { 
        data.map(value=>(
          <tr key={value.id}>
          <td>{value.products}</td>
          <td>{value.features}</td>
          <td>{value.benefits}</td>
        </tr>
        ))
          
        }
        
      </table>
      </div>
   </>
  );
}

export default Services;
