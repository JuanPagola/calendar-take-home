export interface Person {
  firstName?: string;
  lastName?: string;
  id?: string;
  avatar?: string;
}

export interface ListingInfo {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  isFavorite?: boolean;
  agent?: Person;
  shares?: Person[];
  photos?: string[];
}
