import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  rapidposts: [],
};

export const getUserRpList = createAsyncThunk(
  'rapidposts/user-list',
  async (thunkAPI) => {
    try {
      const { data } = await authAxios.get('/rapidPosts/userrapidposts-list');

      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userRapidpostSlice = createSlice({
  name: 'rapidposts-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserRpList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserRpList.fulfilled, (state, action) => {
        state.loading = false;
        state.rapidposts = action.payload;
      })
      .addCase(getUserRpList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userRapidpostSlice;
