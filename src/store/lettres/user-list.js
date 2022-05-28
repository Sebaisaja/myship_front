import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  courriers: [],
};

export const getUserCourriersList = createAsyncThunk(
  'userlettres/list',
  async (thunkAPI) => {
    try {
      const { data } = await authAxios.get('/lettres/usercourriers-list');

      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userCourriersSlice = createSlice({
  name: 'usercourriers-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCourriersList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCourriersList.fulfilled, (state, action) => {
        state.loading = false;
        state.courriers = action.payload;
      })
      .addCase(getUserCourriersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userCourriersSlice;
