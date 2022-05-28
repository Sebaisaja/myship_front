import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  internationalRps: [],
};

export const getAllInternationalRp = createAsyncThunk(
  'rapidPosts/international',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/rapidPosts/international`);
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

const internationalRpListdSlice = createSlice({
  name: 'internationalRapidpost-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllInternationalRp.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInternationalRp.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalRps = action.payload;
      })
      .addCase(getAllInternationalRp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default internationalRpListdSlice;
