import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';

const store = configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    dishes: dishSlice.reducer,
    reviews: reviewSlice.reducer,
    users: userSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
