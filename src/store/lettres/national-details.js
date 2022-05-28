import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalCourrier: null,
};

export const getNationalCourrierById = createAsyncThunk(
  'nationalCourrier/:id',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/lettres/national/${id}`);
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

const nationalCourrierByIdSlice = createSlice({
  name: 'nationalCourrier-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNationalCourrierById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNationalCourrierById.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalCourrier = action.payload;
      })
      .addCase(getNationalCourrierById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalCourrierByIdSlice;
