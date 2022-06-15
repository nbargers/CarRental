import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carSlice from './reducers/carSlice';
import filtersSlice from './reducers/filtersSlice';

const rootReducer = combineReducers({
    carsList: carSlice,
    filtersList: filtersSlice
})

 const store = configureStore({
  reducer: rootReducer 
});

export default store