import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  internationalCourriers: [],
};

export const getAllInternationalCourrier = createAsyncThunk(
  'lettres/international',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/lettres/international`);
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

const internationalCourrierListdSlice = createSlice({
  name: 'internationalCourrier-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllInternationalCourrier.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInternationalCourrier.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalCourriers = action.payload;
      })
      .addCase(getAllInternationalCourrier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default internationalCourrierListdSlice;
