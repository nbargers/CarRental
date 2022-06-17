import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    make: {
        status: false,
        value: 'Any'
    },
    color: {
        status: false,
        value: 'Any'
    },
    minimumYear: {
        status: false,
        value: 1950,
    },
    maxYear: {
      status: false,
      value: 2022,
    },
    text: {
      status: false,
      value: ''
    },
  },
};

export const filtersSlice = createSlice({
  name: 'filtersList',
  initialState,
  reducers: {
    updateMake: (state, action) => {
      (action.payload !== 'Any') ? state.filters.make.status = true : state.filters.make.status = false
      state.filters.make.value = action.payload
    },
    updateColor: (state, action) => {
      (action.payload !== 'Any') ? state.filters.color.status = true : state.filters.color.status = false
      state.filters.color.value = action.payload
    },
    updateMinimumYear: (state, action) => {
      (action.payload !== 1950) ? state.filters.minimumYear.status = true : state.filters.minimumYear.status = false
      state.filters.minimumYear.value = action.payload
    },
    updateMaxYear: (state, action) => {
      (action.payload !== 2022) ? state.filters.maxYear.status = true : state.filters.maxYear.status = false
      state.filters.maxYear.value = action.payload
    },
    updateText: (state, action) => {
      (action.payload !== '') ? state.filters.text.status = true : state.filters.text.status = false
      state.filters.text.value = action.payload
    },
    resetFilter: (state) => {
      state = state.filters = {
        make: {
            status: false,
            value: 'Any'
        },
        color: {
            status: false,
            value: 'Any'
        },
        minimumYear: {
            status: false,
            value: 1950,
        },
        maxYear: {
          status: false,
          value: 2022,
        },
        text: {
          status: false,
          value: ''
        },
      }
    },
  },
});


export const { updateMake, updateColor, updateMinimumYear, updateMaxYear,  updateText, resetFilter} = filtersSlice.actions;

export const selectMake = (state) => state.filtersList.filters.make;

export const selectColor = (state) => state.filtersList.filters.color;

export const selectMinimumYear = (state) => state.filtersList.filters.minimumYear;

export const selectMaxYear = (state) => state.filtersList.filters.maxYear;

export const selectText = (state) => state.filtersList.filters.text.value

export const selectAllFilters = (state) => state.filtersList.filters;

export default filtersSlice.reducer;