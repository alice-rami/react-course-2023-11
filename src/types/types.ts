export type Review = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type NewReview = Omit<Review, 'id'>;
export type ReviewData = NewReview & { name: string };
export type ReviewDataWithId = Review & { name: string };

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: string[];
  reviews: string[];
};

export type User = {
  id: string;
  name: string;
};

export type Dish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type Theme = 'light' | 'dark';
