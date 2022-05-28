import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  internationalCoils: [],
};

export const getAllInternationalCoil = createAsyncThunk(
  'internationalCoil',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/colis/international`);
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

const internationalCoilListdSlice = createSlice({
  name: 'internationalCoil-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllInternationalCoil.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInternationalCoil.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalCoils = action.payload;
      })
      .addCase(getAllInternationalCoil.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default internationalCoilListdSlice;
