import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { facilities } from "../data";
import "../styles/ListingDetails.scss";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  const getListingDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${listingId}`,
        { method: "GET" }
      );

      const data = await response.json();
      setListing(data);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  /*BOOKING CALENDER*/
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    //Update the selected date range when user makes a selection
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 20); // Calculate the difference in date unit

  return (
    <div className="listing-details">
      <div className="title">
        <h1>{listing.title}</h1>
        <div></div>
      </div>
      <div className="photos">
        {listing.listingPhotoPaths?.map((item) => (
          <img
            src={`http:localhost:3001/${item.replace("public", "")}`}
            alt="listing photo"
          />
        ))}
      </div>

      <h2>
        {listing.type} in {listing.city},{listing.province},{listing.country}
      </h2>
      <p>
        {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -
        {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
      </p>
      <hr />

      <div className="profile">
        <img
          src={`http:localhost:3001/${listing.creator.profileImagePath.replace(
            "public",
            ""
          )}`}
        />
        <h3>
          Hosted by {listing.creator.firstName} {listing.creator.lastName}
        </h3>
      </div>

      <hr />

      <h3>Description</h3>
      <p>{listing.description}</p>
      <hr />

      <h3>{listing.highlight}</h3>
      <p>{listing.highlightDesc}</p>
      <hr />

      <div className="booking">
        <div>
          <h2>What this place offers?</h2>
          <div className="amenities">
            {listing.amenities[0].split(",").map((item, index) => (
              <div className="facility" key={index}>
                <div className="facility_icon">
                  {facilities.find((facility) => facility.name === item)?.icon}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2>How long do you want to stay?</h2>
          <div className="date-range-calender">
            <DateRange ranges={dateRange} onChange={handleSelect} />
            {dayCount > 1 ? (
              <h2>
                ${listing.price} X {dayCount} nights{" "}
              </h2>
            ) : (
              <h2>
                ${listing.price} X {dayCount} night{" "}
              </h2>
            )}
            <h2>Total price:${listing.price * dayCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
