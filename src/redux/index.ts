import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './features/entities/restaurant';
import { dishSlice } from './features/entities/dish';
import { reviewSlice } from './features/entities/review';
import { userSlice } from './features/entities/user';

const store = configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    dishes: dishSlice.reducer,
    reviews: reviewSlice.reducer,
    users: userSlice.reducer,
  },
});

console.log(store.getState());

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
