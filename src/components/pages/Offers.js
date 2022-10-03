import React from "react";
import "../../App.css";

function Offers() {
  return (
    <div className="products mt-4 mx-2">
      <div className="col-md-3">
        <div class="card">
          <img
            src="https://www.easemytrip.com/offer-img/easefly-23sep2-mob.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">New User Offer</h5>
            <p class="card-text">
              Get Discount on Booking First Flight with Us
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div class="card">
          <img src="../images/img-12.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Flybig Sale</h5>
            <p class="card-text">
              Book your Flybig Fliht Tickets with EaseMyTrip {"&"}Enjoy Rs. 350
              off
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div class="card">
          <img
            src="../images/hotel-emtfirst-25apr-lp2.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">First Booking Offer</h5>
            <p class="card-text">
              Register {"&"} Enjoy Great Discount on First Hotel Booking
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div class="card">
          <img src="../images/img-14.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">International Flight Deal</h5>
            <p class="card-text">
              Discount up to Rs.3000 on International Flights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
