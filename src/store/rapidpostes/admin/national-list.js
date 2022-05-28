import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalRapidposts: [],
};

export const getAllNationalRp = createAsyncThunk(
  'rapidPosts/national',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/rapidPosts/national`);
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

const nationalRpListSlice = createSlice({
  name: 'rapidposts-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNationalRp.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNationalRp.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalRapidposts = action.payload;
      })
      .addCase(getAllNationalRp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalRpListSlice;
