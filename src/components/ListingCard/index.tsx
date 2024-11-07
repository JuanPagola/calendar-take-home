import React from "react";
//@ts-ignore
import styles from "./styles.module.css";
import { ListingInfo } from "../../utils/Types";
import { starFillIcon, starIcon } from "../../utils/Icons";
import PhotoSection from "../PhotoSection";
import DetailsSection from "../DetailsSection";

export const ListingCard = (props: { info: ListingInfo }) => {
  const {
    address,
    city,
    state,
    zipCode,
    bedrooms,
    bathrooms,

    price,
    agent,
    photos,
    isFavorite,
  } = props.info;

  return (
    <div className={styles.listingCard}>
      {/* Photo Section */}
      <PhotoSection photos={photos} agent={agent} />

      {/* Price and Star */}
      <div className={styles.infoContainer}>
        <div className={styles.price}>${price?.toLocaleString()}</div>
        <>{isFavorite ? starFillIcon() : starIcon()}</>
      </div>

      {/* Details Section */}
      <DetailsSection
        address={address}
        city={city}
        state={state}
        zipCode={zipCode}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
      />
    </div>
  );
};

// Tests for ListingCard Component:
// 1. Should render without errors when provided with valid props.
// 2. Should display the correct price format based on the `price` prop.
// 3. Should display `starFillIcon` when `isFavorite` is true and `starIcon` when false.
// 4. Should render `PhotoSection` with the correct `photos` and `agent` props.
// 5. Should render `DetailsSection` with the correct address, city, state, zip code, bedrooms, and bathrooms props.
// 6. Should handle missing optional fields gracefully (e.g., no error if `photos` or `agent` is undefined).
