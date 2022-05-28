import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rapidPostInterne: null,
};

export const rapidPostInterneSlice = createSlice({
  name: 'rapidPost-interne',
  initialState,
  reducers: {
    saveRapidPostInterne: (state, action) => {
      state.rapidPostInterne = action.payload;
    },
  },
});

export const { saveRapidPostInterne } = rapidPostInterneSlice.actions;
