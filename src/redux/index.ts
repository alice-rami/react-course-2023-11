import { configureStore } from '@reduxjs/toolkit';
// import { restaurantSlice } from './entities/restaurant';
// import { dishSlice } from './entities/dish';
// import { reviewSlice } from './entities/review';
// import { userSlice } from './entities/user';
import { api } from './services/api';

const store = configureStore({
  reducer: {
    // restaurants: restaurantSlice.reducer,
    // dishes: dishSlice.reducer,
    // reviews: reviewSlice.reducer,
    // users: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
