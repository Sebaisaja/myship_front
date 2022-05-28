import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rapidPostIinternational: null,
};

export const rapidPostInternationalSlice = createSlice({
  name: 'rapidPost-international',
  initialState,
  reducers: {
    saveRapidPostInternational: (state, action) => {
      state.rapidPostIinternational = action.payload;
    },
  },
});

export const { saveRapidPostInternational } =
  rapidPostInternationalSlice.actions;
