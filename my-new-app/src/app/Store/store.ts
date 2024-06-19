// src/Store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'; // Ensure correct path

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
