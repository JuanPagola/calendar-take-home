import React from "react";
//@ts-ignore
import styles from "./styles.module.css";

interface DetailsSectionProps {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  bedrooms?: number;
  bathrooms?: number;
}

const DetailsSection = (props: DetailsSectionProps) => {
  const { address, city, state, zipCode, bedrooms, bathrooms } = props;
  return (
    <div className={styles.details}>
      <div className={styles.specs}>
        {bedrooms ? `${bedrooms} beds | ` : ""}
        {bathrooms ? `${bathrooms} bath` : ""}
      </div>
      <div className={styles.address}>
        {address}, {city}, {state} {zipCode}
      </div>
    </div>
  );
};

export default DetailsSection;

// Tests for DetailsSection Component:
// 1. Should render without errors when provided with valid props.
// 2. Should correctly format and display `bedrooms` and `bathrooms` in the "X beds | Y bath" format.
// 3. Should handle cases where `bedrooms` or `bathrooms` is missing by omitting those values in the display.
// 4. Should display the full address in the format "[address], [city], [state] [zipCode]".
// 5. Should handle missing optional address details (e.g., city or state undefined) gracefully.
