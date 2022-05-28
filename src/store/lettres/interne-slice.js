import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lettreInterne: null,
};



export const lettreInterneSlice = createSlice({
  name: 'lettre-interne',
  initialState,
  reducers: {
    saveLettreInterne: (state, action) => {
      state.lettreInterne = action.payload;
    },
  },
});

export const { saveLettreInterne } = lettreInterneSlice.actions;
