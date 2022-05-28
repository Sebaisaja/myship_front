import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalCoils: [],
};

export const getAllNationalCoils = createAsyncThunk(
  'national',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/colis/national`);
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

const nationalCoilListSlice = createSlice({
  name: 'national-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNationalCoils.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNationalCoils.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalCoils = action.payload;
      })
      .addCase(getAllNationalCoils.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalCoilListSlice;
