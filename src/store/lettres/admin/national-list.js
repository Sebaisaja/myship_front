import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalCourriers: [],
};

export const getAllNationalCourriers = createAsyncThunk(
  'lettres/national',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/lettres/national`);
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const nationalCourrierListSlice = createSlice({
  name: 'courriernational-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNationalCourriers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNationalCourriers.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalCourriers = action.payload;
      })
      .addCase(getAllNationalCourriers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalCourrierListSlice;
