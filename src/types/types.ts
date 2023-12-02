export type Dish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type Restaurant = {
  id: string;
  name: string;
  menu: Dish[];
  reviews: Review[];
};

export type Theme = 'light' | 'dark';
