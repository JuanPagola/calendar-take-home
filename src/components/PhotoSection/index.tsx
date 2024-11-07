//@ts-ignore
import styles from "./styles.module.css";
import { Person } from "../../utils/Types";
import React from "react";
import { shareIcon } from "../../utils/Icons";

export interface PhotoSectionProps {
  agent?: Person;
  photos?: string[];
}

const PhotoSection = (props: PhotoSectionProps) => {
  const { agent, photos } = props;
  const hasPhoto = photos?.[0];

  return (
    <div
      className={`${styles.photoContainer} ${!hasPhoto ? styles.noPhoto : ""}`}
    >
      <div className={styles.share}>{shareIcon()}</div>
      {hasPhoto ? (
        <img src={photos[0]} alt="Listing" className={styles.mainPhoto} />
      ) : (
        <div className={styles.placeholder}>No Image Available</div>
      )}
      {agent && (
        <div className={styles.agent}>
          Listing courtesy of {agent.firstName} {agent.lastName}
        </div>
      )}
    </div>
  );
};

export default PhotoSection;

// Tests for PhotoSection Component:
// 1. Should render without errors when provided with valid props.
// 2. Should display the first photo from `photos` prop when available.
// 3. Should display the "No Image Available" placeholder when `photos` is empty or undefined.
// 4. Should display the agent's name in the format "Listing courtesy of [firstName] [lastName]" if `agent` prop is provided.
// 5. Should render the share icon in the correct position.
// 6. Should apply the `noPhoto` class when there are no photos to provide a black background.
