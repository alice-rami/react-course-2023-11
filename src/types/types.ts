type RestaurantId = string;
export type TRestaurantName = string;

type DishId = string;
type DishName = string;
type DishPrice = number;
type DishIngredient = string;

export type TDish = {
  id: DishId;
  name: DishName;
  price: DishPrice;
  ingredients: DishIngredient[];
};

type ReviewId = string;
type ReviewAuthor = string;
type ReviewText = string;
type ReviewRating = number;

export type TReview = {
  id: ReviewId;
  user: ReviewAuthor;
  text: ReviewText;
  rating: ReviewRating;
};

export type TRestaurant = {
  id: RestaurantId;
  name: TRestaurantName;
  menu: TDish[];
  reviews: TReview[];
};
