import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as apiClient from '../../utils/apiCLient'

const initialState = {
  cars: [],
  loading: false,
  error: false
};

export const fetchCars = createAsyncThunk(
  'fetchCars',
  async () => {
    const response = await apiClient.fetchCars();
    if (response.kind === 'success') {
      return {
        cars: response.body 
      }
    } else {
      throw 'Error fetching cars'
    } 
  },
);


export const carSlice = createSlice({
  name: 'carsList',
  initialState,
  reducers: {
    updateCarsList: (state, action) => {
      state.cars = action.payload
    },
  },
  // extraReducers: ( builder ) => {
  //   builder.addCase( fetchCars.pending, ( state ) => {
  //     state.loading = true 
  //     state.error = undefined
  //   })
  //   .addCase(fetchCars.fulfilled, ( state, action ) => {
  //     state.loading = false  
  //     state.cars = action.payload
  //   })
  //   .addCase(fetchCars.rejected, ( state ) => {
  //     state.loading = false  
  //     state.error = true
  //   })
  // }
});


export const { updateCarsList } = carSlice.actions;

export const selectCarList = (state) => state.carsList.cars;

export default carSlice.reducer;