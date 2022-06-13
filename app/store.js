import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carSlice from './reducers/carSlice';

const rootReducer = combineReducers({
    carsList: carSlice
})

 const store = configureStore({
  reducer: rootReducer 
});

export default store