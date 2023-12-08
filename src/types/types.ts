export type NormalizedReview = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type NormalizedRestaurant = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
};

export type NormalizedUser = {
  id: string;
  name: string;
};

export type Theme = 'light' | 'dark';
