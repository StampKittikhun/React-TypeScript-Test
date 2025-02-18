import { createSlice } from '@reduxjs/toolkit';

interface CovidState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CovidState = {
  data: [],
  loading: false,
  error: null,
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    fetchCovidRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCovidSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchCovidFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchCovidRequest, fetchCovidSuccess, fetchCovidFailure } = covidSlice.actions;
export default covidSlice.reducer;
