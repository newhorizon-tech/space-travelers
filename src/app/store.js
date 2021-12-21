import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rocketsReducer from '../features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    rockets: rocketsReducer,
  },
});

export default store;
