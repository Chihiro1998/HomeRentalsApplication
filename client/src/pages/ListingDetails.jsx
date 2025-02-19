import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ListingDetails.scss";

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

  return (
    <div className="listing-details">
      <div className="title">
        <h1>{listing.title}</h1>
        <div></div>
      </div>
    </div>
  );
};

export default ListingDetails;
