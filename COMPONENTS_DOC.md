# Component Documentation

This document provides an overview of the `ListingCard`, `PhotoSection`, and `DetailsSection` components, detailing their props and usage. This documentation will help you understand the API of each component and how to integrate them effectively.

---

## `ListingCard`

The `ListingCard` component displays information about a property listing, including photos, price, and details like address and number of bedrooms/bathrooms.

### Props

| Prop   | Type          | Required | Description                                                                           |
| ------ | ------------- | -------- | ------------------------------------------------------------------------------------- |
| `info` | `ListingInfo` | Yes      | An object containing listing details, such as address, photos, price, and agent info. |

### Usage

```javascript
import { ListingCard } from "./components/ListingCard";
import { ListingInfo } from "./utils/Types";

const listingData: ListingInfo = {
  address: "123 Main St",
  city: "Los Angeles",
  state: "CA",
  zipCode: "90001",
  bedrooms: 3,
  bathrooms: 2,
  price: 750000,
  agent: { firstName: "John", lastName: "Doe", id: 1 },
  photos: ["https://example.com/photo1.jpg"],
  isFavorite: true,
};

<ListingCard info={listingData} />;
```

### Behavior

- Displays the price in a formatted currency style.
- Shows a filled star icon if `isFavorite` is `true`; otherwise, it shows an empty star icon.
- Integrates `PhotoSection` and `DetailsSection` to display the listing's photos, agent info, address, and specs.

---

## `PhotoSection`

The `PhotoSection` component displays the main photo of the property listing, as well as agent information and a share icon.

### Props

| Prop     | Type       | Required | Description                                                                  |
| -------- | ---------- | -------- | ---------------------------------------------------------------------------- |
| `agent`  | `Person`   | No       | Information about the listing agent, including `firstName` and `lastName`.   |
| `photos` | `string[]` | No       | An array of photo URLs. If empty or undefined, a placeholder image is shown. |

### Usage

```javascript
import PhotoSection from "./components/PhotoSection";
import { Person } from "./utils/Types";

const agentData: Person = {
  firstName: "John",
  lastName: "Doe",
  id: 1,
};

<PhotoSection agent={agentData} photos={["https://example.com/photo.jpg"]} />;
```

### Behavior

- Displays the first image from `photos`, or a "No Image Available" placeholder if `photos` is empty.
- Shows the agent's name in the format "Listing courtesy of [firstName] [lastName]".
- Includes a share icon in the top-right corner.

---

## `DetailsSection`

The `DetailsSection` component provides information about the listing’s address, number of bedrooms, and number of bathrooms.

### Props

| Prop        | Type     | Required | Description                         |
| ----------- | -------- | -------- | ----------------------------------- |
| `address`   | `string` | No       | The street address of the listing.  |
| `city`      | `string` | No       | The city of the listing.            |
| `state`     | `string` | No       | The state of the listing.           |
| `zipCode`   | `string` | No       | The zip code of the listing.        |
| `bedrooms`  | `number` | No       | Number of bedrooms in the listing.  |
| `bathrooms` | `number` | No       | Number of bathrooms in the listing. |

### Usage

```javascript
import DetailsSection from "./components/DetailsSection";

<DetailsSection
  address="123 Main St"
  city="Los Angeles"
  state="CA"
  zipCode="90001"
  bedrooms={3}
  bathrooms={2}
/>;
```

### Behavior

- Displays the number of bedrooms and bathrooms in the format "X beds | Y bath".
- Shows the address in the format `[address], [city], [state] [zipCode]`.
- Omits fields if they are not provided, gracefully handling missing data.

---

### Notes

- All components are styled using CSS modules in `styles.module.css`.
- Icons used in `ListingCard` and `PhotoSection` are imported from `../../utils/Icons`.
