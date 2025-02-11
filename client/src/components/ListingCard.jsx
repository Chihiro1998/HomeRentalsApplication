import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import "../styles/ListingCard.scss";

const ListingCard = (
  listingId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  types,
  price
) => {
  /*SLIDER FOR IMAGES*/
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSLide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSLide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className="listing-card">
      <div className="slider-container">
        <div className="slider">
          {listingPhotoPaths?.map((photo, index) => {
            <div key={index} className="slide">
              <img
                src={`http://localhost:3001/${photo.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />
              <div
                className="prev-button"
                onClick={(e) => {
                  goToPrevSLide(e);
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="next-button"
                onClick={(e) => {
                  goToNextSLide(e);
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
