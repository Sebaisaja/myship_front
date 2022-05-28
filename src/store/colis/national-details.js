import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalCoil: null,
};

export const getNationalCoilById = createAsyncThunk(
  'nationalCoil/colis',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/colis/national/${id}`);
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

const nationalCoilByIdSlice = createSlice({
  name: 'nationalCoil-colis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNationalCoilById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNationalCoilById.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalCoil = action.payload;
      })
      .addCase(getNationalCoilById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalCoilByIdSlice;
