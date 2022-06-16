import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
  loading: true,
  error: false
};

export const fetchCars = createAsyncThunk(
  'fetchCars',
  async () => {
    return axios.get('https://myfakeapi.com/api/cars/').then(res => res.data.cars)
  }
);


export const carSlice = createSlice({
  name: 'carsList',
  initialState,
  reducers: {
    updateCarsList: (state, action) => {
      state.cars = action.payload
    },
  },
  extraReducers: ( builder ) => {
    builder.addCase( fetchCars.pending, ( state ) => {
      state.loading = true 
      state.error = undefined
    })
    .addCase(fetchCars.fulfilled, ( state, action ) => {
      state.loading = false  
      state.cars = action.payload
    })
    .addCase(fetchCars.rejected, ( state ) => {
      state.loading = false  
      state.error = true
    })
  }
});


export const { updateCarsList } = carSlice.actions;

export const selectCarList = (state) => state.carsList.cars;

export const selectCarStatus = (state) => state.carsList.loading;

export default carSlice.reducer;