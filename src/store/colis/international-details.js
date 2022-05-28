import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  internationalCoilDetail: null,
};

export const getInternationalCoilById = createAsyncThunk(
  'internationalCoil/id',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/colis/international/${id}`);
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

const internationalCoilByIdSlice = createSlice({
  name: 'internationalCoil-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInternationalCoilById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInternationalCoilById.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalCoilDetail = action.payload;
      })
      .addCase(getInternationalCoilById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default internationalCoilByIdSlice;
